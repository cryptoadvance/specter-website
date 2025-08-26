import { Button } from '@/components/ui/button';
import { WindowsIcon, MacIcon, LinuxIcon } from './PlatformIcons';
import SignatureVerificationDialog from './SignatureVerificationDialog';

interface PlatformDownloadCardProps {
  platform: 'mac' | 'windows' | 'linux';
  downloadUrl: string;
  fileName: string;
  version: string;
  fileSize?: number;
}

const platformConfig = {
  mac: {
    icon: MacIcon,
    buttonText: 'For OS X',
    platform: 'mac' as const
  },
  windows: {
    icon: WindowsIcon,
    buttonText: 'For Windows',
    platform: 'windows' as const
  },
  linux: {
    icon: LinuxIcon,
    buttonText: 'For Linux',
    platform: 'linux' as const
  }
};

const formatFileSize = (bytes: number) => {
  if (bytes === 0) return '0 Bytes';
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
};

export default function PlatformDownloadCard({
  platform,
  downloadUrl,
  fileName,
  version,
  fileSize
}: PlatformDownloadCardProps) {
  const config = platformConfig[platform];
  const IconComponent = config.icon;

  return (
    <div className="bg-specter-navy rounded-xl p-8 text-center">
      <div className="flex justify-center text-white">
        <IconComponent />
      </div>
      <Button
        onClick={() => window.open(downloadUrl, '_blank')}
        className="bg-specter-primary hover:bg-blue-600 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200 mb-2 w-full text-xl"
      >
        {config.buttonText}
      </Button>
      <SignatureVerificationDialog
        platform={config.platform}
        version={version}
        fileName={fileName}
      />
      {fileSize && (
        <p className="text-gray-400 text-sm">{formatFileSize(fileSize)}</p>
      )}
    </div>
  );
}
