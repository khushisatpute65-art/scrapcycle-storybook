import React, { useState } from 'react';
import './UploadSection.css';

export interface UploadSectionProps {
  uploadState?: 'Empty' | 'Uploaded';
  heading?: string;
  previewUrl?: string;
  onUpload?: (file: File) => void;
  onRemove?: () => void;
}

export const UploadSection: React.FC<UploadSectionProps> = ({
  uploadState = 'Empty',
  heading = 'Upload Scrap Photos',
  previewUrl: initialPreview,
  onUpload,
  onRemove,
}) => {
  const [preview, setPreview] = useState<string | null>(initialPreview || (uploadState === 'Uploaded' ? 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&w=400&q=80' : null));

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setPreview(url);
      if (onUpload) onUpload(file);
    }
  };

  const handleRemove = () => {
    setPreview(null);
    if (onRemove) onRemove();
  };

  return (
    <section className="scrapcycle-upload-section">
      <div className="scrapcycle-upload-section__header">
        <h3 className="scrapcycle-upload-section__title">{heading}</h3>
        <span className="scrapcycle-upload-section__badge">Optional</span>
      </div>

      {!preview ? (
        <label className="scrapcycle-upload-section__dropzone">
          <input
            type="file"
            accept="image/*"
            className="scrapcycle-upload-section__input"
            onChange={handleFileChange}
          />
          <div className="scrapcycle-upload-section__icon-box">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
              <circle cx="12" cy="13" r="4" />
            </svg>
          </div>
          <span className="scrapcycle-upload-section__prompt">Tap to upload scrap photo</span>
          <span className="scrapcycle-upload-section__sub">Supports JPG, PNG up to 10MB</span>
        </label>
      ) : (
        <div className="scrapcycle-upload-section__preview-box">
          <img src={preview} alt="Uploaded scrap" className="scrapcycle-upload-section__img" />
          <button
            type="button"
            className="scrapcycle-upload-section__remove-btn"
            onClick={handleRemove}
            aria-label="Remove image"
          >
            ✕
          </button>
        </div>
      )}
    </section>
  );
};

export default UploadSection;

