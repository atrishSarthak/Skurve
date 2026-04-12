'use client'

import { Info, Type } from 'lucide-react'
import React from 'react'
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from '@/components/ui/tooltip'

type Props = {
    typographyGuide: any
}

const StyleGuideTypography = ({ typographyGuide }: Props) => {
    return <>
        {typographyGuide.length === 0 ? (
            <div className="text-center py-20">
                <Type className="w-16 h-16 mx-auto mb-4 text-muted-foreground" />
                <h3 className="text-lg font-medium text-foreground mb-2">
                    No typography generated yet
                </h3>
                <p className="text-sm text-muted-foreground mb-6">
                    Generate a style guide to see typography recommendations.
                </p>
            </div>
        ) : (
            <TooltipProvider>
                <div className="flex flex-col gap-12">
                    {typographyGuide.map((section: any, index: number) => (
                        <div
                            key={index}
                            className="flex flex-col gap-8"
                        >
                            <h3 className="text-base font-medium text-foreground/50 italic">
                                {section.title}
                            </h3>

                            <div className="flex flex-col gap-10">
                                {section.styles?.map((style: any, styleIndex: number) => (
                                    <div
                                        key={styleIndex}
                                        className="flex flex-col gap-2"
                                    >
                                        <div className="flex flex-col gap-0.5">
                                            <h4 className="text-sm font-semibold text-foreground">
                                                {style.name}
                                            </h4>
                                            <div className="flex items-center gap-1.5">
                                                {style.description && (
                                                    <p className="text-xs text-muted-foreground">
                                                        {style.description}
                                                    </p>
                                                )}
                                                <Tooltip>
                                                    <TooltipTrigger asChild>
                                                        <button className="text-muted-foreground hover:text-foreground transition-colors">
                                                            <Info className="w-3.5 h-3.5" />
                                                        </button>
                                                    </TooltipTrigger>
                                                    <TooltipContent
                                                        side="right"
                                                        className="flex flex-col gap-1 px-3 py-2 text-xs"
                                                    >
                                                        <span>Font: {style.fontFamily}</span>
                                                        <span>Size: {style.fontSize}</span>
                                                        <span>Weight: {style.fontWeight}</span>
                                                        <span>Line Height: {style.lineHeight}</span>
                                                        {style.letterSpacing && (
                                                            <span>Letter Spacing: {style.letterSpacing}</span>
                                                        )}
                                                    </TooltipContent>
                                                </Tooltip>
                                            </div>
                                        </div>

                                        <div
                                            className="text-foreground mt-1"
                                            style={{
                                                fontFamily: style.fontFamily,
                                                fontSize: style.fontSize,
                                                fontWeight: style.fontWeight,
                                                lineHeight: style.lineHeight,
                                                letterSpacing: style.letterSpacing || 'normal',
                                            }}
                                        >
                                            The quick brown fox jumps over the lazy dog
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </TooltipProvider>
        )}
    </>
}

export default StyleGuideTypography