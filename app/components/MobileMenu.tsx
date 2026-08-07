"use client";

type Props = {
  open: boolean;
  onClose: () => void;
};

export default function MobileMenu({
  open,
  onClose,
}: Props) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[999] bg-black">
      <div className="flex h-20 items-center justify-between px-6">
        <h1 className="text-3xl font-bold text-pink-600">
          Menu
        </h1>

        <button
          onClick={onClose}
          className="text-4xl text-white"
        >
          ×
        </button>
      </div>

      <div className="px-6 py-10 text-white">
        <p className="mb-6 text-3xl">Home</p>
        <p className="mb-6 text-3xl">Blog</p>
        <p className="mb-6 text-3xl">Archive</p>
        <p className="mb-6 text-3xl">Contact</p>
      </div>
    </div>
  );
}