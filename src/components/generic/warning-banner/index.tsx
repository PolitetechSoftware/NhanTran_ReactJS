import './index.css';

interface WarningBannerProps {
    message: string;
}
const ErrorBanner: React.FC<WarningBannerProps> = ({ message }) => {
    return (
        <div className="warning">
            {message}
        </div>
    );
};
export default ErrorBanner;