interface ButtonProps {
  label: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const Button = ({ label }: ButtonProps) => {
  return (
    <button type="button" className="text-3xl">
      {label}
    </button>
  );
};
