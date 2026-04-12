import { StyleGuide } from '@/redux/api/style-guide'

export const mockStyleGuide: StyleGuide = {
    theme: 'Pastel Dream',
    description: 'A soft, calming pastel palette perfect for modern, friendly UI experiences.',
    colorSections: [
        {
            title: 'Primary Colours',
            swatches: [
                {
                    name: 'Blush Pink',
                    hexColor: '#FFB3C6',
                    description: 'Soft pink for primary actions and brand identity',
                },
                {
                    name: 'Lavender',
                    hexColor: '#C9B8F0',
                    description: 'Gentle purple for primary headings and highlights',
                },
                {
                    name: 'Mint Green',
                    hexColor: '#B5EAD7',
                    description: 'Fresh mint for primary buttons and CTAs',
                },
            ],
        },
        {
            title: 'Secondary & Accent Colors',
            swatches: [
                {
                    name: 'Peach',
                    hexColor: '#FFDAB9',
                    description: 'Warm peach for CTAs and highlights',
                },
                {
                    name: 'Sky Blue',
                    hexColor: '#DBEAFE',
                    description: 'Calming blue for secondary actions',
                },
                {
                    name: 'Sunshine Yellow',
                    hexColor: '#FEF3C7',
                    description: 'Cheerful yellow for attention-grabbing elements',
                },
            ],
        },
        {
            title: 'UI Component Colors',
            swatches: [
                {
                    name: 'Rose Quartz',
                    hexColor: '#FCE7F3',
                    description: 'Soft pink for component borders and dividers',
                },
                {
                    name: 'Powder Blue',
                    hexColor: '#E0F2FE',
                    description: 'Light blue for card and panel backgrounds',
                },
                {
                    name: 'Honeydew',
                    hexColor: '#ECFDF5',
                    description: 'Subtle green for input field backgrounds',
                },
                {
                    name: 'Lilac Mist',
                    hexColor: '#EDE9FE',
                    description: 'Pale purple for sidebar and nav backgrounds',
                },
            ],
        },
        {
            title: 'Utility & Form Colors',
            swatches: [
                {
                    name: 'Fog White',
                    hexColor: '#F9FAFB',
                    description: 'Near-white for page and form backgrounds',
                },
                {
                    name: 'Petal Grey',
                    hexColor: '#F3F4F6',
                    description: 'Soft grey for disabled states and placeholders',
                },
                {
                    name: 'Cotton',
                    hexColor: '#FFFFFF',
                    description: 'Pure white for input and surface backgrounds',
                },
            ],
        },
        {
            title: 'Status & Feedback Colors',
            swatches: [
                {
                    name: 'Pastel Green',
                    hexColor: '#BBF7D0',
                    description: 'Success state — confirmation and completed actions',
                },
                {
                    name: 'Pastel Yellow',
                    hexColor: '#FEF9C3',
                    description: 'Warning state — caution and pending actions',
                },
                {
                    name: 'Pastel Red',
                    hexColor: '#FED7D7',
                    description: 'Error state — destructive and failed actions',
                },
                {
                    name: 'Pastel Blue',
                    hexColor: '#BFDBFE',
                    description: 'Info state — neutral messages and tooltips',
                },
            ],
        },
    ],
    typographySections: [
        {
            title: 'Display & Headings',
            styles: [
                {
                    name: 'Display Large',
                    fontFamily: 'Inter',
                    fontSize: '48px',
                    fontWeight: '700',
                    lineHeight: '1.2',
                    letterSpacing: '-0.02em',
                    description: 'Hero section display text',
                },
                {
                    name: 'Heading 1',
                    fontFamily: 'Inter',
                    fontSize: '36px',
                    fontWeight: '600',
                    lineHeight: '1.3',
                    description: 'Primary page headings',
                },
                {
                    name: 'Heading 2',
                    fontFamily: 'Inter',
                    fontSize: '28px',
                    fontWeight: '600',
                    lineHeight: '1.35',
                    description: 'Section headings',
                },
            ],
        },
        {
            title: 'Body & Reading',
            styles: [
                {
                    name: 'Body Large',
                    fontFamily: 'Inter',
                    fontSize: '18px',
                    fontWeight: '400',
                    lineHeight: '1.7',
                    description: 'Lead paragraphs and introductory text',
                },
                {
                    name: 'Body Regular',
                    fontFamily: 'Inter',
                    fontSize: '16px',
                    fontWeight: '400',
                    lineHeight: '1.6',
                    description: 'Default body text for all content',
                },
                {
                    name: 'Body Small',
                    fontFamily: 'Inter',
                    fontSize: '14px',
                    fontWeight: '400',
                    lineHeight: '1.5',
                    description: 'Secondary text and captions',
                },
            ],
        },
        {
            title: 'Labels & UI Text',
            styles: [
                {
                    name: 'Label',
                    fontFamily: 'Inter',
                    fontSize: '12px',
                    fontWeight: '500',
                    lineHeight: '1.4',
                    letterSpacing: '0.04em',
                    description: 'Form labels and micro-copy',
                },
                {
                    name: 'Button Text',
                    fontFamily: 'Inter',
                    fontSize: '14px',
                    fontWeight: '600',
                    lineHeight: '1',
                    letterSpacing: '0.01em',
                    description: 'CTA and interactive button labels',
                },
                {
                    name: 'Caption',
                    fontFamily: 'Inter',
                    fontSize: '11px',
                    fontWeight: '400',
                    lineHeight: '1.4',
                    description: 'Image captions and footnotes',
                },
            ],
        },
    ],
}
