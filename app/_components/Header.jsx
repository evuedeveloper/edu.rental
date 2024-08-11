"use client";
import { Button } from '@/components/ui/button';
import { useUser, UserButton } from '@clerk/nextjs'; // Import UserButton here
import { Plus } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

function Header() {
    const path = usePathname();
    const { user, isSignedIn } = useUser();

    return (
        <div className='p-6 px-10 flex justify-between items-center shadow-sm fixed top-0 w-full z-10 bg-white'>
            <div className='flex gap-12 items-center'>
                <Image src='/stu.rental.svg' height={80} width={80} alt='Logo' />
                <ul className='hidden md:flex gap-10'>
                    <li>
                        <Link href='/' className={`hover:text-primary font-medium text-sm cursor-pointer ${path === '/' ? 'text-primary' : ''}`}>
                            For Sell
                        </Link>
                    </li>
                    <li>
                        <Link href='/for-rent' className='hover:text-primary font-medium text-sm cursor-pointer'>
                            For Rent
                        </Link>
                    </li>
                    <li>
                        <Link href='/agent-finder' className='hover:text-primary font-medium text-sm cursor-pointer'>
                            Agent Finder
                        </Link>
                    </li>
                </ul>
            </div>
            <div className='flex gap-2 items-center'>
                <Link href={'/add-new-listing'}>
                    <Button className='flex gap-2'>
                        <Plus className='h-5 w-5' />
                        Post Your Ad
                    </Button>
                </Link>
                {isSignedIn ? (
                    <UserButton />
                ) : (
                    <Link href={'/sign-in'}>
                        <Button variant='outline'>
                            <Link href='/sign-in'>Login</Link>
                        </Button>
                    </Link>
                )}
            </div>
        </div>
    );
}

export default Header;
