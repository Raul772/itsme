type Window = {
  id: React.Key;
  title: string;
  icon?: string;
  content: React.ReactNode;
  isMinimized: boolean;
};

export default Window;
