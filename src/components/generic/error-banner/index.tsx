import './index.css';

interface ErrorBannerProps {
    message: string;
}
const ErrorBanner: React.FC<ErrorBannerProps> = ({ message }) => {
    return (
        <div className="alert">
            {message}
        </div>
    );
};
export default ErrorBanner;