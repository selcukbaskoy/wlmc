export default function ArticleTags({ tags }) {
  return (
    <section className="py-8 px-6 bg-white">
      <div className="max-w-[800px] mx-auto">
        <h3 className="text-lg font-bold text-gray-900 mb-4">Etiketler</h3>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-[#b91c1c] hover:text-white transition-colors cursor-pointer"
            >
              #{tag}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
