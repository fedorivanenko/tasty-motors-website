import Link from 'next/link'

type BlockWithAnchor = {
  name?: string
  blockType: string
}

type MenuProps = {
  blocks: BlockWithAnchor[]
}

export const Menu: React.FC<MenuProps> = ({ blocks }) => {
  const items = blocks
    .map((block) => ({
      label: block.name,
      href: `#block-${block.name}`,
    }))
    .filter(Boolean)

  return (
    <nav className="fiex top-0 p-5 z-50 bg-background shadow px-4 py-2 flex gap-4 text-sm font-medium">
      {items.map((item, idx) => (
        <Link key={idx} href={item.href}>
          {item.label}
        </Link>
      ))}
    </nav>
  )
}
