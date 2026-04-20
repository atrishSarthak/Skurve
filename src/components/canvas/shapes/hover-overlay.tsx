import { Shape } from '@/redux/slice/shapes'

interface HoverOverlayProps {
    shape: Shape
}

export const HoverOverlay = ({ shape }: HoverOverlayProps) => {
    const getBounds = () => {
        switch (shape.type) {
            case 'frame':
            case 'rect':
            case 'ellipse':
            case 'generatedui':
                return { x: shape.x, y: shape.y, w: shape.w, h: shape.h }

            case 'freedraw': {
                if (shape.points.length === 0) return null
                const xs = shape.points.map((p) => p.x)
                const ys = shape.points.map((p) => p.y)
                return {
                    x: Math.min(...xs) - 6,
                    y: Math.min(...ys) - 6,
                    w: Math.max(...xs) - Math.min(...xs) + 12,
                    h: Math.max(...ys) - Math.min(...ys) + 12,
                }
            }

            case 'arrow':
            case 'line':
                return {
                    x: Math.min(shape.startX, shape.endX) - 6,
                    y: Math.min(shape.startY, shape.endY) - 6,
                    w: Math.abs(shape.endX - shape.startX) + 12,
                    h: Math.abs(shape.endY - shape.startY) + 12,
                }

            case 'text': {
                const textWidth = Math.max(shape.text.length * (shape.fontSize * 0.6), 100)
                const textHeight = shape.fontSize * 1.2
                return { x: shape.x - 4, y: shape.y - 4, w: textWidth + 20, h: textHeight + 12 }
            }

            default:
                return null
        }
    }

    const bounds = getBounds()
    if (!bounds) return null

    return (
        <div
            className="absolute pointer-events-none"
            style={{
                left: bounds.x - 2,
                top: bounds.y - 2,
                width: bounds.w + 4,
                height: bounds.h + 4,
                borderRadius: shape.type === 'frame' ? '10px' : shape.type === 'ellipse' ? '50%' : '4px',
                border: '1.5px solid rgba(96, 165, 250, 0.7)', // blue-400 at 70% opacity
                boxShadow: '0 0 0 1px rgba(96, 165, 250, 0.2)',
                background: 'rgba(96, 165, 250, 0.05)',
            }}
        />
    )
}
