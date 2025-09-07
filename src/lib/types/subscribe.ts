export interface SubscribeProps {
  className?: string;
  title?: string;
  description?: string;
  placeholder?: string;
  buttonText?: string;
  onSubscribe?: (email: string) => Promise<void>;
}

export interface SubscribeResponse {
  success: boolean;
  message: string;
  error?: string;
}
