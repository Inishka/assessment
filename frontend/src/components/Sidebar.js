
//Sidebar.js
import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Sidebar = () => {
  const pathname = usePathname();
  const [openSections, setOpenSections] = useState({});

  const toggleSection = (section) => {
    setOpenSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const sidebarLinks = [
    {
      label: 'D2C Entrepreneurs',
      route: '/d2c-entrepreneurs',
      subItems: [
        { label: 'Identify Relevant VCs', route: '/identify-vcs' },
        { label: 'Related Companies', route: '/related-companies' },
        { label: 'Competitors', route: '/competitors' },
      ],
    },
    {
      label: 'Interactive Tool',
      route: '/interactive-tool',
      subItems: [
        { label: 'Explore Relationships', route: '/explore-relationships' },
      ],
    },
    {
      label: 'Integrated Insights',
      route: '/integrated-insights',
      subItems: [
        { label: 'Investment Trends', route: '/investment-trends' },
        { label: 'Competitor Analysis', route: '/competitor-analysis' },
        { label: 'Market Gaps', route: '/market-gaps' },
      ],
    },
    {
      label: 'Email Submission',
      route: '/email-submission',
    },
  ];

  return (
    <section className='sticky left-0 top-0 flex h-screen w-fit flex-col justify-between bg-dark-1 p-6 pt-28 text-white max-sm:hidden lg:w-[264px]'>
      <div className='flex flex-1 flex-col gap-6'>
        {sidebarLinks.map((item) => {
          const isActive = pathname === item.route || pathname.startsWith(`${item.route}/`);
          const isOpen = openSections[item.label];

          return (
            <div key={item.label}>
              <div
                className={`flex gap-4 items-center p-4 rounded-lg justify-start cursor-pointer ${isActive ? 'bg-blue-1' : ''}`}
                onClick={() => toggleSection(item.label)}
              >
                <p className="text-lg font-semibold">{item.label}</p>
              </div>

              {item.subItems && isOpen && (
                <div className="ml-4 mt-2 space-y-2">
                  {item.subItems.map((subItem) => (
                    <Link
                      href={subItem.route}
                      key={subItem.label}
                      className={`block text-sm p-2 rounded-lg hover:bg-blue-1 ${pathname === subItem.route ? 'bg-blue-1' : ''}`}
                    >
                      {subItem.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Sidebar;

