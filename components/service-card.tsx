import Link from "next/link"

interface ServiceCardProps {
  image: string
  category: string
  title: string
  description: string
  price: string
}

export default function ServiceCard({ image, category, title, description, price }: ServiceCardProps) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-sm border border-slate-200 transition-all duration-300 hover:shadow-md hover:-translate-y-1">
      <div className="h-48 overflow-hidden">
        <img
          src={image || "/placeholder.svg"}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>
      <div className="p-5">
        <span className="inline-block bg-blue-600 text-white text-xs font-medium px-3 py-1 rounded-full mb-3">
          {category}
        </span>
        <h4 className="text-lg font-semibold mb-2">{title}</h4>
        <p className="text-slate-600 text-sm mb-4">{description}</p>
        <span className="block text-blue-600 font-semibold text-lg mb-4">{price}</span>
        <Link
          href="#contacto"
          className="block text-center bg-amber-500 hover:bg-amber-600 text-slate-900 font-semibold px-4 py-2 rounded-md transition-colors"
        >
          Solicitar Servicio
        </Link>
      </div>
    </div>
  )
}
