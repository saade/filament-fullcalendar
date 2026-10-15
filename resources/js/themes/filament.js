// Based on FullCalendar's Breezy theme. Copyright (c) Adam Shaw. MIT License.

const cx = (...classes) => classes.filter(Boolean).join(' ')

const escapeHtml = (text) =>
    String(text)
        .replaceAll('&', '&amp;')
        .replaceAll('<', '&lt;')
        .replaceAll('>', '&gt;')

const xxsText = 'text-[0.6875rem]/[1.090909]'

const background = 'bg-white dark:bg-gray-900'
const faintBackground = 'bg-gray-50 dark:bg-white/[0.03]'
const mutedBackground = 'bg-gray-100 dark:bg-white/5'

const strongText = 'text-gray-950 dark:text-white'
const text = 'text-gray-700 dark:text-gray-200'
const mutedText = 'text-gray-500 dark:text-gray-400'
const faintText = 'text-gray-400 dark:text-gray-500'

const border = 'border-gray-200 dark:border-white/10'
const mutedBorder = 'border-gray-100 dark:border-white/5'
const strongBorder = 'border-gray-300 dark:border-white/20'

const outlineWidth = 'outline-2'
const outlineWidthFocus = 'focus-visible:outline-2'
const outlineWidthGroupFocus = 'group-focus-visible:outline-2'
const outlineOffset = 'outline-offset-2'
const primaryOutline = 'outline-primary-600 dark:outline-primary-500'
const primaryOutlineFocus = `${outlineWidthFocus} ${primaryOutline}`

const mutedHover = 'hover:bg-gray-100 dark:hover:bg-white/5'
const mutedHoverPressable = `${mutedHover} focus-visible:bg-gray-100 dark:focus-visible:bg-white/5`
const faintHover = 'hover:bg-gray-50 dark:hover:bg-white/[0.03]'
const faintHoverPressable = `${faintHover} active:bg-gray-100 dark:active:bg-white/5 focus-visible:bg-gray-50 dark:focus-visible:bg-white/[0.03]`
const strongSolidPressable =
    'bg-gray-100 hover:bg-gray-200 active:bg-gray-300 dark:bg-white/10 dark:hover:bg-white/15 dark:active:bg-white/20'

const selected = `bg-gray-100 dark:bg-white/10 ${strongText} ${primaryOutlineFocus}`
const unselected = `${mutedText} hover:text-gray-950 dark:hover:text-white ${primaryOutlineFocus}`

const primary = 'bg-primary-600 text-white dark:bg-primary-500'
const primaryPressable = `${primary} hover:bg-primary-500 dark:hover:bg-primary-400`
const primaryPressableGroup = `${primary} group-hover:bg-primary-500 dark:group-hover:bg-primary-400`
const primaryButton = `${primaryPressable} border-transparent ${primaryOutlineFocus} ${outlineOffset}`

const secondaryButton = `${background} ${strongText} hover:bg-gray-50 dark:bg-white/5 dark:hover:bg-white/10 border-gray-950/10 dark:border-white/20 ${primaryOutlineFocus} -outline-offset-1`
const secondaryButtonIcon =
    'size-5 text-gray-400 group-hover:text-gray-500 group-focus-visible:text-gray-500 dark:text-gray-500 dark:group-hover:text-gray-400 dark:group-focus-visible:text-gray-400'

const eventText =
    'text-[color-mix(in_oklab,var(--fc-event-color)_70%,var(--gray-950))] dark:text-[color-mix(in_oklab,var(--fc-event-color)_55%,white)]'
const eventBackground =
    'bg-[color-mix(in_oklab,var(--fc-event-color)_15%,white)] dark:bg-[color-mix(in_oklab,var(--fc-event-color)_20%,var(--gray-900))]'
const eventBackgroundPressable = cx(
    eventBackground,
    'hover:bg-[color-mix(in_oklab,var(--fc-event-color)_20%,white)] dark:hover:bg-[color-mix(in_oklab,var(--fc-event-color)_25%,var(--gray-900))]',
    'active:bg-[color-mix(in_oklab,var(--fc-event-color)_25%,white)] dark:active:bg-[color-mix(in_oklab,var(--fc-event-color)_30%,var(--gray-900))]',
)

const mutedTextPressableGroup =
    'text-gray-400 group-hover:text-gray-500 group-focus-visible:text-gray-500 dark:text-gray-500 dark:group-hover:text-gray-400 dark:group-focus-visible:text-gray-400'

const blockPointerResizer = 'absolute hidden group-hover:block'
const rowPointerResizer = `${blockPointerResizer} inset-y-0 w-2`
const columnPointerResizer = `${blockPointerResizer} inset-x-0 h-2`

const blockTouchResizer = `absolute size-2 border border-(--fc-event-color) ${background} rounded-full`
const rowTouchResizer = `${blockTouchResizer} top-1/2 -mt-1`
const columnTouchResizer = `${blockTouchResizer} left-1/2 -ml-1`

const mutedHoverButton = cx(mutedHoverPressable, outlineWidthFocus, primaryOutline)

const normalDayHeaderBorder = (info) =>
    cx(!info.inPopover && (info.isMajor ? `border ${strongBorder}` : !info.isNarrow && `border ${border}`))

const mutedDayHeaderBorder = (info) =>
    cx(!info.inPopover && (info.isMajor ? `border ${strongBorder}` : !info.isNarrow && `border ${mutedBorder}`))

const normalDayCellBorder = (info) => (info.isMajor ? strongBorder : border)

const mutedDayCellBorder = (info) => (info.isMajor ? strongBorder : mutedBorder)

const tallDayCellBottom = 'min-h-3'
const shortDayCellBottom = (info) => cx(!info.isNarrow && 'min-h-px')

const icon = (path, className) => ({
    html: `<svg class="${className}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">${path}</svg>`,
})

const chevronDown = (className) =>
    icon(
        '<path fill-rule="evenodd" d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" />',
        className,
    )

const chevronDoubleLeft = (className) =>
    icon(
        '<path fill-rule="evenodd" d="M4.72 9.47a.75.75 0 0 0 0 1.06l4.25 4.25a.75.75 0 1 0 1.06-1.06L6.31 10l3.72-3.72a.75.75 0 1 0-1.06-1.06L4.72 9.47Zm9.25-4.25L9.72 9.47a.75.75 0 0 0 0 1.06l4.25 4.25a.75.75 0 1 0 1.06-1.06L11.31 10l3.72-3.72a.75.75 0 0 0-1.06-1.06Z" clip-rule="evenodd" />',
        className,
    )

const xMark = (className) =>
    icon(
        '<path d="M6.28 5.22a.75.75 0 0 0-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 1 0 1.06 1.06L10 11.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L11.06 10l3.72-3.72a.75.75 0 0 0-1.06-1.06L10 8.94 6.28 5.22Z" />',
        className,
    )

const dayRowCommonClasses = {
    listItemEventClass: (info) =>
        cx(
            'mb-px p-px',
            info.isNarrow ? 'mx-px rounded-sm' : 'mx-1 rounded-md',
            info.isSelected ? mutedBackground : info.isInteractive ? mutedHoverPressable : mutedHover,
        ),
    listItemEventInnerClass: (info) =>
        cx('flex flex-row items-center justify-between', info.isNarrow ? `py-px ${xxsText}` : 'py-0.5 text-xs'),
    listItemEventTimeClass: (info) =>
        cx(info.isNarrow ? 'px-px' : 'px-0.5', mutedText, 'order-1 whitespace-nowrap overflow-hidden shrink-1'),
    listItemEventTitleClass: (info) =>
        cx(
            info.isNarrow ? 'px-px' : 'px-0.5',
            strongText,
            'font-medium whitespace-nowrap overflow-hidden shrink-100',
            info.timeText && 'text-ellipsis',
        ),

    rowEventClass: (info) =>
        cx(info.isStart && (info.isNarrow ? 'ms-0.5' : 'ms-1'), info.isEnd && (info.isNarrow ? 'me-0.5' : 'me-1')),
    rowEventInnerClass: (info) => (info.isNarrow ? 'py-px' : 'py-0.5'),

    rowMoreLinkClass: (info) =>
        cx(
            'mb-px border',
            info.isNarrow ? 'mx-px border-primary-600 dark:border-primary-500 rounded-sm' : 'self-start mx-1 border-transparent rounded-md',
            mutedHoverPressable,
        ),
    rowMoreLinkInnerClass: (info) => cx(info.isNarrow ? `p-px ${xxsText}` : 'p-0.5 text-xs', strongText),
}

export default {
    name: 'theme-filament',
    optionDefaults: {
        className: (info) =>
            cx(
                background,
                'text-sm/normal',
                !(info.borderlessTop || info.borderlessBottom || info.borderlessX) && 'rounded-xl',
            ),

        viewClass: (info) => {
            const hasBorderTop = !info.options.headerToolbar && !info.borderlessTop
            const hasBorderBottom = !info.options.footerToolbar && !info.borderlessBottom
            const hasBorderX = !info.borderlessX

            return cx(
                border,
                hasBorderTop && 'border-t',
                hasBorderBottom && 'border-b',
                hasBorderX && 'border-x',
                hasBorderTop && hasBorderX && 'rounded-t-xl',
                hasBorderBottom && hasBorderX && 'rounded-b-xl',
                !info.isHeightAuto && 'overflow-hidden',
            )
        },

        toolbarClass: (info) =>
            cx(
                'px-4 py-3 flex flex-row flex-wrap items-center justify-between gap-3 overflow-hidden',
                faintBackground,
                border,
                !info.borderlessX && 'border-x',
            ),
        headerToolbarClass: (info) =>
            cx('border-b', !info.borderlessTop && 'border-t', !(info.borderlessTop || info.borderlessX) && 'rounded-t-xl'),
        footerToolbarClass: (info) =>
            cx('border-t', !info.borderlessBottom && 'border-b', !(info.borderlessBottom || info.borderlessX) && 'rounded-b-xl'),
        toolbarSectionClass: 'shrink-0 flex flex-row items-center gap-3',
        toolbarTitleClass: `text-base font-semibold ${strongText}`,
        buttonGroupClass: (info) => cx('flex flex-row items-center', !info.hasSelection && 'rounded-lg shadow-xs'),
        buttonClass: (info) =>
            cx(
                'group py-2 flex flex-row items-center gap-1.5 text-sm appearance-none cursor-pointer',
                info.isIconOnly ? 'px-2' : 'px-3',
                info.buttonGroup?.hasSelection
                    ? cx('rounded-lg font-medium', info.isSelected ? selected : unselected)
                    : cx(
                          'font-semibold',
                          info.isPrimary ? primaryButton : secondaryButton,
                          info.buttonGroup
                              ? 'first:rounded-s-lg first:border-s last:rounded-e-lg last:border-e border-y'
                              : 'rounded-lg shadow-xs border',
                      ),
            ),
        buttons: {
            prev: {
                iconContent: () => chevronDown(cx(secondaryButtonIcon, 'rotate-90 [[dir=rtl]_&]:-rotate-90')),
            },
            next: {
                iconContent: () => chevronDown(cx(secondaryButtonIcon, '-rotate-90 [[dir=rtl]_&]:rotate-90')),
            },
            prevYear: {
                iconContent: () => chevronDoubleLeft(cx(secondaryButtonIcon, '[[dir=rtl]_&]:rotate-180')),
            },
            nextYear: {
                iconContent: () => chevronDoubleLeft(cx(secondaryButtonIcon, 'rotate-180 [[dir=rtl]_&]:rotate-0')),
            },
        },

        eventShortHeight: 50,
        eventColor: 'var(--primary-500)',
        eventContrastColor: 'white',
        eventClass: (info) =>
            cx(
                info.isDragging && 'text-sm/normal',
                info.event.url && 'text-inherit no-underline',
                info.isSelected ? cx(outlineWidth, info.isDragging && 'shadow-md') : outlineWidthFocus,
                primaryOutline,
            ),

        backgroundEventColor: 'var(--primary-500)',
        backgroundEventClass:
            'not-print:bg-[color-mix(in_oklab,var(--fc-event-color)_8%,transparent)] print:border print:border-(--fc-event-color)',
        backgroundEventTitleClass: (info) =>
            cx('opacity-50 italic', info.isNarrow ? `p-1 ${xxsText}` : 'p-2 text-xs', text),

        blockEventClass: (info) =>
            cx(
                'group relative print:bg-white border-transparent print:border-(--fc-event-color)',
                info.isInteractive ? eventBackgroundPressable : eventBackground,
                info.isDragging && !info.isSelected && 'opacity-75',
            ),
        blockEventInnerClass: eventText,
        blockEventTimeClass: 'whitespace-nowrap overflow-hidden shrink-1',
        blockEventTitleClass: 'whitespace-nowrap overflow-hidden shrink-100',

        rowEventClass: (info) =>
            cx(
                'mb-px border-y',
                info.isStart && cx('border-s', info.isNarrow ? 'rounded-s-sm' : 'rounded-s-md'),
                info.isEnd && cx('border-e', info.isNarrow ? 'rounded-e-sm' : 'rounded-e-md'),
            ),
        rowEventBeforeClass: (info) =>
            cx(info.isStartResizable && cx(info.isSelected ? rowTouchResizer : rowPointerResizer, '-start-1')),
        rowEventAfterClass: (info) =>
            cx(info.isEndResizable && cx(info.isSelected ? rowTouchResizer : rowPointerResizer, '-end-1')),
        rowEventInnerClass: (info) => cx('flex flex-row items-center', info.isNarrow ? xxsText : 'text-xs'),
        rowEventTimeClass: (info) => cx(info.isNarrow ? 'ps-0.5' : 'ps-1', 'font-medium'),
        rowEventTitleClass: (info) => (info.isNarrow ? 'px-0.5' : 'px-1'),

        columnEventClass: (info) =>
            cx(
                'border-x ring ring-white dark:ring-gray-900',
                info.isStart && cx('border-t rounded-t-lg', info.isNarrow ? 'mt-px' : 'mt-1'),
                info.isEnd && cx('border-b rounded-b-lg', info.isNarrow ? 'mb-px' : 'mb-1'),
            ),
        columnEventBeforeClass: (info) =>
            cx(info.isStartResizable && cx(info.isSelected ? columnTouchResizer : columnPointerResizer, '-top-1')),
        columnEventAfterClass: (info) =>
            cx(info.isEndResizable && cx(info.isSelected ? columnTouchResizer : columnPointerResizer, '-bottom-1')),
        columnEventInnerClass: (info) =>
            cx(
                'flex',
                info.isShort
                    ? 'flex-row items-center gap-1 p-1'
                    : cx('flex-col', info.isNarrow ? 'px-1 py-0.5' : 'px-2 py-1'),
                info.isShort || info.isNarrow ? xxsText : 'text-xs',
            ),
        columnEventTimeClass: (info) => !info.isShort && (info.isNarrow ? 'pt-0.5' : 'pt-1'),
        columnEventTitleClass: (info) => cx(!info.isShort && (info.isNarrow ? 'py-0.5' : 'py-1'), 'font-semibold'),

        moreLinkClass: `${outlineWidthFocus} ${primaryOutline}`,
        moreLinkInnerClass: 'whitespace-nowrap overflow-hidden',
        columnMoreLinkClass: (info) =>
            cx(
                info.isNarrow ? 'my-px' : 'my-1',
                `border border-transparent print:border-black rounded-md ${strongSolidPressable} print:bg-white ring ring-white dark:ring-gray-900`,
            ),
        columnMoreLinkInnerClass: (info) => cx(info.isNarrow ? `p-0.5 ${xxsText}` : 'p-1 text-xs', text),

        dayHeaderAlign: (info) => (info.inPopover ? 'start' : 'center'),
        dayHeaderClass: (info) => cx('justify-center', info.inPopover && `border-b ${border} ${faintBackground}`),
        dayHeaderInnerClass: (info) =>
            cx(
                'flex flex-row items-center',
                !info.dayNumberText && !info.inPopover
                    ? cx(
                          'py-1 rounded-sm text-xs',
                          info.isNarrow ? `px-1 m-1 ${mutedText}` : `px-1.5 m-2 font-semibold ${strongText}`,
                          info.hasNavLink && mutedHoverButton,
                      )
                    : info.isToday && info.dayNumberText && !info.inPopover
                      ? cx('group m-2 outline-none', info.isNarrow ? 'h-6' : 'h-8')
                      : cx(
                            'rounded-sm',
                            info.inPopover ? 'm-2 px-1 py-0.5' : cx('mx-2 h-6 px-1.5', info.isNarrow ? 'my-2' : 'my-3'),
                            info.hasNavLink && mutedHoverButton,
                        ),
            ),
        dayHeaderContent: (info) => {
            if (!info.dayNumberText && !info.inPopover) {
                return { html: escapeHtml(info.text) }
            }

            return {
                html: info.textParts
                    .map((part) => {
                        const className = cx(
                            'whitespace-pre',
                            info.isNarrow ? 'text-xs' : 'text-sm',
                            part.type === 'day'
                                ? cx(
                                      'flex flex-row items-center',
                                      !info.isNarrow && 'font-semibold',
                                      info.isToday && !info.inPopover
                                          ? cx(
                                                'mx-0.5 rounded-full justify-center',
                                                info.isNarrow ? 'size-6' : 'size-8',
                                                info.hasNavLink
                                                    ? `${primaryPressableGroup} ${outlineWidthGroupFocus} ${outlineOffset} ${primaryOutline}`
                                                    : primary,
                                            )
                                          : strongText,
                                  )
                                : mutedText,
                        )

                        return `<span class="${className}">${escapeHtml(part.value)}</span>`
                    })
                    .join(''),
            }
        },

        dayCellClass: (info) =>
            cx('border', (info.isOther || info.isDisabled) && !info.options.businessHours && faintBackground),
        dayCellTopClass: (info) => cx(info.isNarrow ? 'min-h-0.5' : 'min-h-1', 'flex flex-row'),
        dayCellTopInnerClass: (info) =>
            cx(
                'flex flex-row items-center justify-center whitespace-nowrap',
                info.isNarrow ? `my-px h-5 ${xxsText}` : 'my-1 h-6 text-xs',
                info.isToday
                    ? cx(
                          'rounded-full font-semibold',
                          info.isNarrow ? 'ms-px' : 'ms-1',
                          info.text === info.dayNumberText ? (info.isNarrow ? 'w-5' : 'w-6') : info.isNarrow ? 'px-1' : 'px-2',
                          info.hasNavLink ? `${primaryPressable} ${outlineOffset}` : primary,
                      )
                    : cx(
                          'rounded-e-sm',
                          info.isNarrow ? 'px-1' : 'px-2',
                          info.hasNavLink && mutedHoverPressable,
                          info.isOther ? faintText : info.monthText ? text : mutedText,
                          info.monthText && 'font-bold',
                      ),
            ),
        dayCellInnerClass: (info) => cx(info.inPopover && 'p-2'),

        popoverClass: `${background} rounded-lg overflow-hidden shadow-lg ring-1 ring-gray-950/5 dark:ring-white/10 m-1 min-w-55 text-sm/normal`,
        popoverCloseClass: `group absolute top-2 end-2 p-0.5 rounded-sm ${mutedHoverButton} appearance-none cursor-pointer`,
        popoverCloseContent: () => xMark(`size-5 ${mutedTextPressableGroup}`),

        dayLaneClass: (info) =>
            cx('border', info.isMajor ? strongBorder : mutedBorder, info.isDisabled && faintBackground),
        dayLaneInnerClass: (info) => (info.isStack ? 'm-1' : info.isNarrow ? 'mx-px' : 'mx-1'),
        slotLaneClass: (info) => cx(`border ${mutedBorder}`, info.isMinor && 'border-dotted'),

        listDaysClass: 'my-10 mx-auto w-full max-w-218 px-4',
        listDayClass: (info) => cx(!info.isLast && `border-b ${mutedBorder}`, 'flex flex-row items-start gap-2'),
        listDayHeaderClass: 'my-px shrink-0 w-1/4 max-w-50 py-3.5 flex flex-col items-start',
        listDayHeaderInnerClass: (info) =>
            cx(
                'my-0.5 py-0.5 px-2 -mx-2 rounded-full text-sm',
                !info.level
                    ? info.isToday
                        ? cx('font-semibold', info.hasNavLink ? primaryPressable : primary)
                        : cx(`font-medium ${strongText}`, info.hasNavLink && mutedHoverPressable)
                    : cx(faintText, info.hasNavLink && `${mutedHoverPressable} hover:text-gray-500 dark:hover:text-gray-400`),
            ),
        listDayBodyClass: `my-4 grow min-w-0 border ${border} rounded-lg`,

        singleMonthClass: (info) =>
            cx(
                info.multiMonthColumns > 1 && 'm-4',
                info.multiMonthColumns === 1 && !info.isLast && `border-b ${border}`,
            ),
        singleMonthHeaderClass: (info) =>
            cx(info.multiMonthColumns > 1 ? 'pb-1' : `py-1.5 ${background} border-b ${border}`, 'items-center'),
        singleMonthHeaderInnerClass: (info) =>
            cx(`py-1 px-2 rounded-md text-sm font-semibold ${strongText}`, info.hasNavLink && mutedHoverPressable),

        tableHeaderClass: background,
        fillerClass: `border ${mutedBorder}`,
        dayNarrowWidth: 100,
        dayHeaderRowClass: `border ${mutedBorder}`,
        dayRowClass: `border ${border}`,
        slotHeaderRowClass: `border ${border}`,
        slotHeaderInnerClass: `${faintText} uppercase`,

        navLinkClass: `${outlineWidthFocus} ${primaryOutline}`,
        inlineWeekNumberClass: (info) =>
            cx(
                `absolute top-0 end-0 ${background} ${mutedText} whitespace-nowrap rounded-es-md border-b border-b-gray-300 dark:border-b-white/20 border-s border-s-gray-200 dark:border-s-white/10`,
                info.isNarrow ? `p-0.5 ${xxsText}` : 'p-1.5 text-xs',
                info.hasNavLink ? `${mutedHoverPressable} -outline-offset-1` : mutedHover,
            ),
        highlightClass: 'bg-primary-500/10',
        nonBusinessHoursClass: faintBackground,
        nowIndicatorLineClass: '-m-px border border-danger-600 dark:border-danger-500',
        nowIndicatorDotClass:
            '-m-[6px] border-6 border-danger-600 dark:border-danger-500 size-0 rounded-full ring-2 ring-white dark:ring-gray-900',

        resourceDayHeaderAlign: 'center',
        resourceDayHeaderClass: 'border',
        resourceDayHeaderInnerClass: (info) => cx(`m-2 font-semibold ${text}`, info.isNarrow ? 'text-xs' : 'text-sm'),

        resourceColumnHeaderClass: `border ${mutedBorder} justify-center`,
        resourceColumnHeaderInnerClass: `m-2 text-sm font-semibold ${strongText}`,
        resourceColumnResizerClass: 'absolute inset-y-0 w-[5px] end-[-3px]',
        resourceGroupHeaderClass: `border ${border} ${mutedBackground}`,
        resourceGroupHeaderInnerClass: `m-2 text-sm ${text}`,
        resourceCellClass: `border ${mutedBorder}`,
        resourceCellInnerClass: `m-2 text-sm ${text}`,
        resourceIndentClass: 'ms-1 -me-1.5 justify-center',
        resourceExpanderClass: `group p-0.5 rounded-full ${mutedHoverPressable} ${outlineWidthFocus} ${primaryOutline}`,
        resourceExpanderContent: (info) =>
            chevronDown(cx(`size-5 ${mutedTextPressableGroup}`, !info.isExpanded && '-rotate-90 [[dir=rtl]_&]:rotate-90')),
        resourceHeaderRowClass: `border ${border}`,
        resourceRowClass: `border ${border}`,
        resourceColumnDividerClass: `border-e ${strongBorder}`,

        resourceGroupLaneClass: `border ${border} ${mutedBackground}`,
        resourceLaneClass: `border ${border}`,
        resourceLaneBottomClass: (info) => cx(info.options.eventOverlap && 'h-2'),
        timelineBottomClass: 'h-2',
    },
    views: {
        dayGrid: {
            ...dayRowCommonClasses,
            dayHeaderClass: normalDayHeaderBorder,
            dayHeaderDividerClass: `border-b ${strongBorder}`,
            dayCellClass: normalDayCellBorder,
            dayCellBottomClass: shortDayCellBottom,
            backgroundEventInnerClass: 'flex flex-row justify-end',
        },
        multiMonth: {
            ...dayRowCommonClasses,
            dayHeaderClass: normalDayHeaderBorder,
            dayHeaderDividerClass: (info) => cx(info.multiMonthColumns === 1 && `border-b ${strongBorder} shadow-sm`),
            dayCellClass: normalDayCellBorder,
            dayCellBottomClass: shortDayCellBottom,
            tableBodyClass: (info) =>
                cx(info.multiMonthColumns > 1 && `border ${border} rounded-lg shadow-xs overflow-hidden`),
        },
        timeGrid: {
            ...dayRowCommonClasses,
            dayHeaderClass: mutedDayHeaderBorder,
            dayHeaderDividerClass: (info) =>
                cx('border-b', info.options.allDaySlot ? border : `${strongBorder} not-print:shadow-sm`),
            dayCellClass: mutedDayCellBorder,
            dayCellBottomClass: tallDayCellBottom,

            weekNumberHeaderClass: 'items-center justify-end',
            weekNumberHeaderInnerClass: (info) =>
                cx(
                    `m-1.5 h-6 px-1.5 ${mutedText} rounded-sm flex flex-row items-center`,
                    info.hasNavLink && mutedHoverPressable,
                    info.isNarrow ? 'text-xs' : 'text-sm',
                ),

            allDayHeaderClass: 'items-center',
            allDayHeaderInnerClass: (info) => cx(`m-3 ${faintText}`, info.isNarrow ? xxsText : 'text-xs'),
            allDayDividerClass: `border-b ${strongBorder} not-print:shadow-sm`,

            slotHeaderClass: 'justify-end',
            slotHeaderInnerClass: (info) =>
                cx(
                    'relative mx-3 my-2',
                    info.isNarrow ? `-top-3.5 ${xxsText}` : '-top-4 text-xs',
                    info.isFirst && 'hidden',
                ),
            slotHeaderDividerClass: `border-e ${mutedBorder}`,
        },
        list: {
            listItemEventClass: (info) =>
                cx(
                    'group p-4 items-center gap-3',
                    !info.isLast && `border-b ${mutedBorder}`,
                    info.isInteractive ? faintHoverPressable : faintHover,
                ),
            listItemEventBeforeClass: 'border-4 border-(--fc-event-color) rounded-full',
            listItemEventInnerClass: 'flex flex-row items-center gap-3 text-sm',
            listItemEventTimeClass: `shrink-0 w-1/2 max-w-50 whitespace-nowrap overflow-hidden text-ellipsis ${mutedText}`,
            listItemEventTitleClass: (info) =>
                cx(
                    `grow min-w-0 font-medium whitespace-nowrap overflow-hidden ${strongText}`,
                    info.event.url && 'group-hover:underline',
                ),

            noEventsClass: 'grow flex flex-col items-center justify-center',
            noEventsInnerClass: `py-15 ${mutedText}`,
        },
        resourceDayGrid: {
            resourceDayHeaderClass: (info) => (info.isMajor ? strongBorder : border),
        },
        resourceTimeGrid: {
            resourceDayHeaderClass: (info) => (info.isMajor ? strongBorder : mutedBorder),
        },
        timeline: {
            rowEventClass: (info) => info.isEnd && 'me-px',
            rowEventInnerClass: (info) => (info.options.eventOverlap ? 'py-1' : 'py-2'),

            rowMoreLinkClass: `me-px mb-px border border-transparent print:border-black rounded-md ${strongSolidPressable} print:bg-white`,
            rowMoreLinkInnerClass: `p-1 text-xs ${text}`,

            slotHeaderAlign: (info) => (info.isTime ? 'start' : 'center'),
            slotHeaderClass: (info) => cx(info.level > 0 && `border ${mutedBorder}`, 'justify-end'),
            slotHeaderInnerClass: (info) =>
                cx(
                    'mx-3 my-2 text-xs',
                    info.isTime && cx('relative -start-4', info.isFirst && 'hidden'),
                    info.hasNavLink && 'hover:underline',
                ),
            slotHeaderDividerClass: `border-b ${strongBorder} shadow-sm`,
        },
    },
}
