type Props = {
  title: string;
  button1: string;
  button2?: string;
  image: string;
};

export default function HeroSection({ title, button1, button2, image }: Props) {
  return (
    <section
      className="relative bg-cover bg-center text-white h-[500px] flex flex-col items-center justify-center"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="bg-black bg-opacity-50 absolute inset-0"></div>
      <div className="relative z-10 text-center">
        <h1 className="text-4xl font-bold mb-6">{title}</h1>
        <div className="flex gap-4 justify-center">
          <button className="bg-green-600 px-6 py-3 rounded-lg font-semibold hover:bg-green-700">
            {button1}
          </button>
          {button2 && (
            <button className="bg-white text-green-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200">
              {button2}
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
