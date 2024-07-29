'use client';

import { chakra, useColorMode } from '@chakra-ui/system';
import { ComponentProps, forwardRef } from 'react';

type AvatarProps = Partial<
    ComponentProps<'div'> & {
        showBorder?: boolean;
        name?: string;
        width?: string;
        height?: string;
    }
>;

const NextAvatar = forwardRef<HTMLDivElement, AvatarProps>(
    ({ showBorder, name = 'AC', style, width = '40px', height = '40px', ...props }, ref) => {
        const { colorMode } = useColorMode();
        const firstLetter = name.charAt(0);

        return (
            <div
                ref={ref}
                {...props}
                style={{
                    ...style,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: '50%',
                    backgroundColor: colorMode === 'dark' ? '#11047a' : '#11047a',
                    color: colorMode === 'dark' ? 'white' : 'white',
                    width,
                    height,
                    border: showBorder ? '2px solid' : undefined,
                    borderColor: colorMode === 'dark' ? '#34495E' : 'white',
                    fontSize: '15px',
                    fontWeight: 'bold',
                }}
            >
                {firstLetter}
            </div>
        );
    }
);

NextAvatar.displayName = 'NextAvatar';

export const ChakraNextAvatar = chakra(NextAvatar, {
    shouldForwardProp: (prop) =>
        ['width', 'height', 'name', 'showBorder'].includes(prop as string),
});
