// info for solutions page
export const sliderInfo = [
  {
    icon: 'first-aid',
    title: 'Healthcare',
    body: 'DDI has worked alongside healthcare providers for over 25 years, easing financial concerns and constraints through our flexible leasing and financing solutions. We are experts at helping you effectively manage cash flow so you can continue to focus on providing quality care.',
  },
  {
    icon: 'graduation-cap',
    title: 'Education',
    body: 'Technology is the future of innovation in the modern classroom. DDI works with hundreds of school districts, public and private, providing the tools to reinvent education and helping bring their visions of learning in the 21st century to life.',
  },
  {
    icon: 'camera',
    title: 'Media',
    body: 'From broadcasting to production and distribution, media companies rely on DDI to stay current and competitive in the ever-evolving entertainment industry, without pressing the “pause button” on growth.',
  },
  {
    icon: 'shopping-cart',
    title: 'Retail',
    body: 'From disruptive growth companies to Fortune 500s, DDI offers tailored and appropriate financing solutions to help your sales boom, keep your data safe and ensure your offerings remain competitive.',
  },
  {
    icon: 'cogs',
    title: 'Manufacturing',
    body: 'The need for state-of-the-art technology to enhance manufacturing and workflow operations is critical. Our leasing solutions help maximize your company’s productivity and efficiency.',
  },
  {
    icon: 'money-bill-wave',
    title: 'Financial',
    body: 'In no other industry is the “Internal Rate of Return” dynamic more evident. DDI’s flexible and creative solutions allow financial institutions to keep their capital for operations, rather than solving technology problems, all while fitting cleanly into allocated budgets.',
  },
  {
    icon: 'laptop',
    title: 'Managed Service Providers',
    body: 'In the most rapidly evolving landscape, establish, expand and reinvent your business with the latest technologies to ensure your customers will not look elsewhere. DDI offers the solutions to keep your technology current and help your business to thrive.',
  },
  {
    icon: 'bed',
    title: 'Hospitality',
    body: 'Leading hospitality brands depend on DDI to help them connect with guests and improve operational efficiencies so they can deliver the best possible experiences to their customers.',
  },
];
// info for meet the team dropdown
export const teamInfo = {
  'Mike-Dolan': {
    image: null,
    name: 'Mike Dolan',
    title: 'Managing Director',
    location: 'Spring Lake, NJ',
    body: 'Mike began his career at DDI in January 2015. He has over 22 years of experience in finance. Prior to joining DDI, Mike spent 13 years running equity research sales operations at Instinet and Axiom Capital. His focus was in the Oil and Gas and Biotechnology industries, providing alternative and customized research to multi-billion dollar Hedge Funds and Investment Advisors. Prior to that, Mike was a Sales Trader at Sanford Bernstein and an Institutional Wholesaler for Goldman Sachs Asset Management.  Mike graduated from St. Joseph’s University in Philadelphia in 1993 and lives in Fair Haven, NJ.',
    email: 'mdolan@ddicapitalinc.com',
  },
  'Christopher-Flammer': {
    image: null,
    name: 'Christopher Flammer',
    title: 'Manging Director',
    location: 'Spring Lake, NJ',
    body: 'Chris has worked at DDI Capital since 1998.  He started the “vendor” relationship program as a sales representative and is now Managing Director of the Spring Lake office.  Chris is a graduate of Saint Joseph’s University, resides in Fair Haven, NJ and enjoys spending time playing golf with his clients.',
    email: 'chrisf@ddicapitalinc.com',
  },
  'Mike-Moran': {
    image: null,
    name: 'Mike Moran',
    title: 'Chief Executive Officer',
    location: 'Bedminster, NJ',
    body: 'Mike Co-Founded DDI Capital, Inc. in 1995 after spending 8 years working at XL/ Datacomp, Inc., a Premier IBM Business partner. Prior to his years at XLDC, Mike worked at IBM as a salesman in various NJ sales locations.  Mike received a BA from Lycoming College with a degree in Economics and lives in Bedminster, NJ.',
    email: 'mikem@ddicapitalinc.com',
  },
  'Terry-Moran': {
    image: null,
    name: 'Terry Moran',
    title: 'Vice President',
    location: 'Bedminster, NJ',
    body: 'Terry began working at DDI Capital in 1995 and was the company’s first employee!  As Vice President, Terry focuses on both corporate and education clients.  Prior to working at DDI, Terry worked for six years at an IBM reseller.  DDI continues to support IBM clients, particularly in the iSeries market.  Terry is also a partner in the DDI Company, Stonehenge Resources – a staffing and recruiting firm.  Terry is a graduate of Fairfield University.',
    email: 'terrym@ddicapitalinc.com',
  },
  'Christian-Moscicki': {
    image: null,
    name: 'Christian Moscicki',
    title: 'Managing Director',
    location: 'Westhampton, NY',
    body: 'Christian joined DDI Capital in mid-2015 after 8 successful years as an institutional equity salesperson at several broker-dealers and banks (most recently FBR, Inc.). Christian graduated from Middlebury College with a degree in English in 2006 and has lived in New York City ever since. He initially spent 3 years in public/investor relations before pursuing a career in financial product/services sales.',
    email: 'cmoscicki@ddicapitalinc.com',
  },
  'Greg-Nappi': {
    image: null,
    name: 'Greg Nappi',
    title: 'Chief Financial Officer',
    location: 'Bedminster, NJ',
    body: 'Greg Joined DDI Capital, Inc. in 1999 after working in public accounting for 12 years. Greg sits on the board of NEFA (National Equipment Finance Association). Greg received a BS in Accounting from St. Thomas Aquinas College and lives in Waldwick, NJ.',
    email: 'gregn@ddicapitalinc.com',
  },
  'Tina-Perna': {
    image: null,
    name: 'Tina Perna',
    title: 'Operations Specialist ',
    location: 'Bedminster, NJ ',
    body: 'Tina joined DDI Capital in December 2014 after working in the banking industry for 4 years.  As the Operations Specialist, Tina’s primary responsibilities include managing the accounts receivable reporting, bank account reconciliations, and various tax processes including sales tax and business personal property tax.  In addition to that, she is also the payroll and billing administrator for Stonehenge Resources LLC, a DDI owned company.  Tina is a graduate of West Chester University of Pennsylvania.',
    email: 'tinar@ddicapitalinc.com'
  },
  'Tom-Tensfeldt': {
    image: null,
    name: 'Tom Tensfeldt',
    title: 'Managing Director',
    location: 'Jacksonville, FL',
    body: 'Tom began working at DDI Capital in 2001.  Prior to that, he worked in the leasing industry with ACS Capital Corporation focusing on retail customer relationships.  From that experience, Tom prides himself on being the liaison between his customers and vendors.  Tom lives in Ponte Vedra Beach, Florida.',
    email: 'tomt@ddicapitalinc.com',
  }
};

export const gatsbyImgStyle = {
  top: 0,
  left: 0,
  position: 'absolute',
  width: '100%',
  height: '100%',
};



export const toggleNav = function () {
  const siteWrap = document.querySelector('#site-wrapper');
  siteWrap.classList.toggle('show-nav');
  const ham = document.querySelector('.hamburger-menu');
  ham.classList.toggle('animate');
};
