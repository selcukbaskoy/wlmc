// Gelecekteki admin panel için sertifika yükleme bileşeni
import { useState } from 'react';
import { Upload, File, Check, X } from 'lucide-react';

export default function CertificateUploader() {
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [dragActive, setDragActive] = useState(false);

  const handleDrop = (e) => {
    e.preventDefault();
    setDragActive(false);
    
    const files = Array.from(e.dataTransfer.files);
    handleFiles(files);
  };

  const handleFiles = (files) => {
    const pdfFiles = files.filter(file => file.type === 'application/pdf');
    
    pdfFiles.forEach(file => {
      const reader = new FileReader();
      reader.onload = () => {
        setUploadedFiles(prev => [...prev, {
          id: Date.now() + Math.random(),
          name: file.name,
          size: file.size,
          data: reader.result,
          uploaded: false
        }]);
      };
      reader.readAsDataURL(file);
    });
  };

  const uploadToServer = async (file) => {
    try {
      const formData = new FormData();
      formData.append('certificate', file.data);
      formData.append('filename', file.name);
      
      const response = await fetch('/api/admin/upload-certificate', {
        method: 'POST',
        body: formData
      });
      
      if (response.ok) {
        setUploadedFiles(prev => 
          prev.map(f => f.id === file.id ? {...f, uploaded: true} : f)
        );
      }
    } catch (error) {
      console.error('Upload error:', error);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6">Sertifika Yükleme</h2>
      
      {/* Drag & Drop Area */}
      <div
        className={`border-2 border-dashed rounded-lg p-8 text-center transition-colors ${
          dragActive 
            ? 'border-[#b91c1c] bg-red-50' 
            : 'border-gray-300 hover:border-gray-400'
        }`}
        onDragEnter={() => setDragActive(true)}
        onDragLeave={() => setDragActive(false)}
        onDragOver={(e) => e.preventDefault()}
        onDrop={handleDrop}
      >
        <Upload className="mx-auto text-gray-400 mb-4" size={48} />
        <p className="text-lg font-semibold text-gray-700">
          PDF sertifikalarını buraya sürükleyin
        </p>
        <p className="text-gray-500 mt-2">
          veya dosya seçmek için tıklayın
        </p>
        <input
          type="file"
          multiple
          accept=".pdf"
          onChange={(e) => handleFiles(Array.from(e.target.files))}
          className="hidden"
        />
      </div>

      {/* Uploaded Files List */}
      {uploadedFiles.length > 0 && (
        <div className="mt-8">
          <h3 className="text-lg font-semibold mb-4">Yüklenen Dosyalar</h3>
          <div className="space-y-3">
            {uploadedFiles.map(file => (
              <div key={file.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center space-x-3">
                  <File className="text-[#b91c1c]" size={20} />
                  <div>
                    <p className="font-medium">{file.name}</p>
                    <p className="text-sm text-gray-500">
                      {(file.size / 1024 / 1024).toFixed(2)} MB
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  {file.uploaded ? (
                    <div className="flex items-center text-green-600">
                      <Check size={16} className="mr-1" />
                      Yüklendi
                    </div>
                  ) : (
                    <button
                      onClick={() => uploadToServer(file)}
                      className="px-4 py-2 bg-[#b91c1c] text-white rounded hover:bg-[#991b1b]"
                    >
                      Yükle
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
