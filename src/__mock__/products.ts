export interface car {
    id:number;
    name:string;
    thumbnail:string;
    brand:string;
    gallery:string[];
    price:number;
    year:number;
    chassisType:string;
    city:string;
    cylinder:number;
    gearbox:number;
    description:string;
}
    const cars : car[] = [
    {
      id: 1,
      name: 'فورد موستانگ',
      thumbnail: '/images/products/car1.png',
      brand: 'فورد',
      gallery:['/images/gallery/1.jpg','/images/gallery/2.jpg','/images/gallery/3.jpg','/images/gallery/4.jpg','/images/gallery/5.jpg'],
      price: 1750000000,
      year: 2021,
      chassisType: 'کوپه',
      city:'تهران',
      cylinder:8,
      gearbox:10,
      description:'فورد موستانگ یک خودروی کوپه با طراحی جذاب و قدرتمند است. این خودرو دارای موتور V8 و گیربکس 10 دنده است. موستانگ با عملکرد بالا و رانندگی سریع و هیجان‌انگیز محبوبیت زیادی دارد. این خودرو در شهرهای مختلف قابل استفاده است و برای علاقه‌مندان به خودروهای اسپرت مناسب است.'
    },
    {
      id: 2,
      name: 'شورلت کامرو',
      thumbnail: '/images/products/car2.png',
      brand: 'شورلت',
      gallery:['/images/gallery/1.jpg','/images/gallery/2.jpg','/images/gallery/3.jpg','/images/gallery/4.jpg','/images/gallery/5.jpg'],
      price: 180000000,
      year: 2021,
      chassisType: 'کوپه',
      city:'اهواز',
      cylinder:4,
      gearbox:6,
      description:'فورد موستانگ یک خودروی کوپه با طراحی جذاب و قدرتمند است. این خودرو دارای موتور V8 و گیربکس 10 دنده است. موستانگ با عملکرد بالا و رانندگی سریع و هیجان‌انگیز محبوبیت زیادی دارد. این خودرو در شهرهای مختلف قابل استفاده است و برای علاقه‌مندان به خودروهای اسپرت مناسب است.'
    },
    {
      id: 3,
      name: 'پورشه 911',
      thumbnail: '/images/products/car3.png',
      brand: 'پورشه',
      gallery:['/images/gallery/1.jpg','/images/gallery/2.jpg','/images/gallery/3.jpg','/images/gallery/4.jpg','/images/gallery/5.jpg'],
      price: 3500000000,
      year: 2021,
      chassisType: 'کوپه',
      city:'تبریز',
      cylinder:5,
      gearbox:3,
      description:'فورد موستانگ یک خودروی کوپه با طراحی جذاب و قدرتمند است. این خودرو دارای موتور V8 و گیربکس 10 دنده است. موستانگ با عملکرد بالا و رانندگی سریع و هیجان‌انگیز محبوبیت زیادی دارد. این خودرو در شهرهای مختلف قابل استفاده است و برای علاقه‌مندان به خودروهای اسپرت مناسب است.'
    },
    {
      id: 4,
      name: 'لامبورگینی اونتادور',
      thumbnail: '/images/products/car4.png',
      brand: 'لامبورگینی',
      gallery:['/images/gallery/1.jpg','/images/gallery/2.jpg','/images/gallery/3.jpg','/images/gallery/4.jpg','/images/gallery/5.jpg'],
      price: 7500000000,
      year: 2021,
      chassisType: 'کوپه',
      city:'اصفهان',
      cylinder:10,
      gearbox:16,
      description:'فورد موستانگ یک خودروی کوپه با طراحی جذاب و قدرتمند است. این خودرو دارای موتور V8 و گیربکس 10 دنده است. موستانگ با عملکرد بالا و رانندگی سریع و هیجان‌انگیز محبوبیت زیادی دارد. این خودرو در شهرهای مختلف قابل استفاده است و برای علاقه‌مندان به خودروهای اسپرت مناسب است.'
    },
    {
      id: 5,
      name: 'فراری 458 ایتالیا',
      thumbnail: '/images/products/car5.png',
      brand: 'فراری',
      gallery:['/images/gallery/1.jpg','/images/gallery/2.jpg','/images/gallery/3.jpg','/images/gallery/4.jpg','/images/gallery/5.jpg'],
      price: 12000000000,
      year: 2021,
      chassisType: 'کوپه',
      city:'تهران',
      cylinder:8,
      gearbox:10,
      description:'فورد موستانگ یک خودروی کوپه با طراحی جذاب و قدرتمند است. این خودرو دارای موتور V8 و گیربکس 10 دنده است. موستانگ با عملکرد بالا و رانندگی سریع و هیجان‌انگیز محبوبیت زیادی دارد. این خودرو در شهرهای مختلف قابل استفاده است و برای علاقه‌مندان به خودروهای اسپرت مناسب است.'
    },
    {
      id: 6,
      name: 'بوگاتی ویرون',
      thumbnail: '/images/products/car6.png',
      brand: 'بوگاتی',
      gallery:['/images/gallery/1.jpg','/images/gallery/2.jpg','/images/gallery/3.jpg','/images/gallery/4.jpg','/images/gallery/5.jpg'],
      price: 35000000000,
      year: 2021,
      chassisType: 'کوپه',
      city:'مشهد',
      cylinder:6,
      gearbox:6,
      description:'فورد موستانگ یک خودروی کوپه با طراحی جذاب و قدرتمند است. این خودرو دارای موتور V8 و گیربکس 10 دنده است. موستانگ با عملکرد بالا و رانندگی سریع و هیجان‌انگیز محبوبیت زیادی دارد. این خودرو در شهرهای مختلف قابل استفاده است و برای علاقه‌مندان به خودروهای اسپرت مناسب است.'
    },
    {
      id: 7,
      name: 'آئودی آر8',
      thumbnail: '/images/products/car7.png',
      brand: 'آئودی',
      gallery:['/images/gallery/1.jpg','/images/gallery/2.jpg','/images/gallery/3.jpg','/images/gallery/4.jpg','/images/gallery/5.jpg'],
      price: 1600000000,
      year: 2021,
      chassisType: 'کوپه',
      city:'تهران',
      cylinder:8,
      gearbox:10,
      description:'فورد موستانگ یک خودروی کوپه با طراحی جذاب و قدرتمند است. این خودرو دارای موتور V8 و گیربکس 10 دنده است. موستانگ با عملکرد بالا و رانندگی سریع و هیجان‌انگیز محبوبیت زیادی دارد. این خودرو در شهرهای مختلف قابل استفاده است و برای علاقه‌مندان به خودروهای اسپرت مناسب است.'
    },
    {
      id: 8,
      name: 'بی ام دابلیو ام3',
      thumbnail: '/images/products/car8.png',
      brand: 'بی ام دابلیو',
      gallery:['/images/gallery/1.jpg','/images/gallery/2.jpg','/images/gallery/3.jpg','/images/gallery/4.jpg','/images/gallery/5.jpg'],
      price: 80000000,
      year: 2021,
      chassisType: 'سدان',
      city:'تهران',
      cylinder:8,
      gearbox:10,
      description:'فورد موستانگ یک خودروی کوپه با طراحی جذاب و قدرتمند است. این خودرو دارای موتور V8 و گیربکس 10 دنده است. موستانگ با عملکرد بالا و رانندگی سریع و هیجان‌انگیز محبوبیت زیادی دارد. این خودرو در شهرهای مختلف قابل استفاده است و برای علاقه‌مندان به خودروهای اسپرت مناسب است.'
    },
    {
      id: 9,
      name: 'مرسدس بنز کلاس اس',
      thumbnail: '/images/products/car9.png',
      brand: 'مرسدس بنز',
      gallery:['/images/gallery/1.jpg','/images/gallery/2.jpg','/images/gallery/3.jpg','/images/gallery/4.jpg','/images/gallery/5.jpg'],
      price: 230000000,
      year: 2021,
      chassisType: 'سدان',
      city:'تهران',
      cylinder:8,
      gearbox:10,
      description:'فورد موستانگ یک خودروی کوپه با طراحی جذاب و قدرتمند است. این خودرو دارای موتور V8 و گیربکس 10 دنده است. موستانگ با عملکرد بالا و رانندگی سریع و هیجان‌انگیز محبوبیت زیادی دارد. این خودرو در شهرهای مختلف قابل استفاده است و برای علاقه‌مندان به خودروهای اسپرت مناسب است.'
    },
    {
      id: 10,
      name: 'تسلا مدل اس',
      thumbnail: '/images/products/car10.png',
      brand: 'تسلا',
      gallery:['/images/gallery/1.jpg','/images/gallery/2.jpg','/images/gallery/3.jpg','/images/gallery/4.jpg','/images/gallery/5.jpg'],
      price: 2000000000,
      year: 2021,
      chassisType: 'سدان',
      city:'تهران',
      cylinder:8,
      gearbox:10,
      description:'فورد موستانگ یک خودروی کوپه با طراحی جذاب و قدرتمند است. این خودرو دارای موتور V8 و گیربکس 10 دنده است. موستانگ با عملکرد بالا و رانندگی سریع و هیجان‌انگیز محبوبیت زیادی دارد. این خودرو در شهرهای مختلف قابل استفاده است و برای علاقه‌مندان به خودروهای اسپرت مناسب است.'
    }
  ];

  export default cars