import * as React from 'react'

import { CarGridBlockProps } from '@/types/blocks'

export const CarGridBlock: React.FC<CarGridBlockProps> = ({ cars }) => {
  return (
    <section className="bg-[#fdf9e9] py-12 px-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {cars.map((car, i) => {
          return (
            <div
              key={i}
              className={`p-4 border bg-[#fdf9e9] text-[#2d241f]'
              }`}
            >
              <div className="aspect-square overflow-hidden mb-4 flex justify-center items-center">
                {car.image?.url && (
                  <img
                    src={car.image.url}
                    alt={car.image.alt || ''}
                    className={`object-cover w-full h-full'
                    }`}
                  />
                )}
              </div>
              <h3 className="text-xl font-extrabold uppercase">{car.model}</h3>
              <p className="text-sm font-semibold mt-1">FROM ${car.price.toLocaleString()}</p>
              {car.orderLink && (
                <a
                  href={car.orderLink}
                  className={`block mt-2 font-extrabold uppercase text-sm tracking-wide`}
                >
                  Order
                </a>
              )}
            </div>
          )
        })}
      </div>
    </section>
  )
}
