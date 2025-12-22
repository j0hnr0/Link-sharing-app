export default function LoadingComponent() {
  return (
    <div className="flex items-center justify-center min-h-screen gap-2">
      <div className="w-3 h-3 bg-custom-purple-600 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
      <div className="w-3 h-3 bg-custom-purple-600 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
      <div className="w-3 h-3 bg-custom-purple-600 rounded-full animate-bounce"></div>
    </div>
  );
}
