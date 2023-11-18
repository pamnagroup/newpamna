import './App.css';
import {Menubar} from "primereact/menubar";
import {Button} from "primereact/button";
import {Avatar} from "primereact/avatar";
import {InputText} from "primereact/inputtext";
import {assetImage} from "./Config";
import {Divider} from "primereact/divider";



function MenubarStart(props) {
    return(
        <span className="font-bold text-4xl"> پمنا</span>
    )

}

function MenubarEnd(props) {
    return(
        <div className="flex justify-content-end gap-2 ">
            <Button className="p-button-text text-black-alpha-90" label={'تماس با ما'}/>
            <Button className="p-button-text text-black-alpha-90" label={'ورود'}/>
            <Button className="p-button-outlined text-black-alpha-90 border-primary-400 border-2" label={'رایگان شروع کنید'} style={{borderColor:'#6161FF'}}/>

        </div>
    )

}

function ItemComponent({image,title,description}) {
    return <div className="w-2 p-3">
        <Avatar shape={"circle"} size={"large"} image={assetImage.replace('{{IMAGE}}',image)}/>
        <span className="block text-xs font-semibold pt-2 pb-2">{title}</span>
        <span className="block text-xs text-gray-700">{description}</span>
    </div>;
}

function ItemConnecting({title,description,image,color,fontColor}) {
    return <div className={`${color} w-3 h-15rem border-round p-3 text-sm`}>

        <Avatar size={"xlarge"} className="bg-white" image={assetImage.replace('{{IMAGE}}',image)}/>
        <p style={{color:fontColor}}>{title}</p>
        <div style={{color:fontColor}}>{description}</div>
    </div>;
}
function Section1() {
    const items=[
        {label:"خانه"},
        {label:"محصول ما"},
        {label:"منابع"},
        {label:"قیمت ها"},
    ]
    return <div className="h-screen" style={{background: "linear-gradient(-75deg, #ECF1F7 11.5%, #FFF 30.36%)"}}>
        <Menubar className="pl-4 pr-7 bg-transparent border-none" model={items} start={<MenubarStart/>}
                 end={<MenubarEnd/>}/>
        <div className="flex justify-content-center">
            <div className="flex w-full pt-7">
                <div className="w-6 flex justify-content-end">
                    <div className="w-8 flex flex-column align-items-center p-7">
                        <h3 className="font-bold text-5xl">نرم افزار مدیریت کار، پروژه و کسب و کار آنلاین </h3>
                        <span style={{lineHeight: "3rem"}}>برنامه ریزی و مدیریت کارها و پروژه ها،مدیریت جریان کارها،مدیریت منابع پروژه،مدیریت مالی و منابع انسانی با ویژگی هایی قدرتمند،همه بصورت آنلاین در اختیار تیم شما</span>
                        <div className="flex gap-3 pt-6 w-full">
                            <InputText className="p-3 flex-1" placeholder={"شماره تلفن همراه"}/>
                            <Button label={"رایگان شروع کنید"}/>
                        </div>
                    </div>
                </div>
                <div className="flex-1">
                    <img alt={'section1img.jpg'} className="w-full" src={assetImage.replace("{{IMAGE}}", "section1img.jpg")}/>
                </div>
            </div>
        </div>
        <div className="flex flex-column align-items-center justify-content-center pt-7">
            <span className="text-lg">به جمع بیش از 1000 تیم موفق و پر تلاش بپیوندید</span>
            <div className="flex gap-2 pt-7">
                <Avatar icon="pi pi-home"/>
                <Avatar icon="pi pi-home"/>
                <Avatar icon="pi pi-home"/>
                <Avatar icon="pi pi-home"/>
                <Avatar icon="pi pi-home"/>
            </div>
        </div>
    </div>;
}
function Section2() {
    const items=[
        {icon:'pi-eye',title:'نگاه کلی'},
        {icon:'pi-eye',title:'تیم های IT و نرم افزاری'},
        {icon:'pi-eye',title:'شرکت های تولیدی'},
        {icon:'pi-eye',title:'استارت آپ ها',active:true},
        {icon:'pi-eye',title:'شرکت های خدماتی'},
        {icon:'pi-eye',title:'شرکت های پیمانکاری'},
    ]

    function TabItem({icon,title,active}) {

        return <div className="flex flex-column align-items-center gap-3 border-cyan-400 p-3 pl-4 pr-4"
                    style={{borderBottom:`${active===true && "solid 0.5rem"}`}}>
            <i className={`pi ${icon}`}/>
            <span>{title}</span>

        </div>;
    }

    return <div className="flex flex-column justify-content-center align-items-center" style={{background: "linear-gradient(-75deg, #ECF1F7 11.5%, #FFF 30.36%)"}}>
        <div className="flex justify-content-center pt-4">
            <p className="font-bold text-2xl">چابکی، دقت در اجرای کار ها و افزایش بینش مدیریت </p>
            <p className="text-2xl"> رو به تیم خودت بیار! </p>
        </div>
        <div className="flex justify-content-center bg-white-alpha-60">
            {items.map((t)=>{return<TabItem active={t.active} icon={t.icon} title={t.title}/>})}
        </div>
        <div className="flex w-10 pt-7">
            <div className="flex flex-1">
                <img alt={'section1img.jpg'} className="w-full" src={assetImage.replace("{{IMAGE}}", "section1img.jpg")}/>
            </div>
            <div className="flex flex-column w-5 justify-content-center">
                <p className="font-semibold text-3xl">با جزئیات کارها رو برنامه ریزی کن!</p>
                <p className="line-height-4">
                    برای پروژه هایی که نیاز به برنامه ریزی، پیش بینی، تجزیه و تحلیل هزینه، تخصیص منابع، مدیریت وظایف و گزارش دارن، پمنا از رقبا بهتر عمل می کنه.
                </p>
                <div className="flex">
                    <Avatar/>
                    <div>
                        <span>برای پروژه هایی که نیاز به برنامه ریزی، پیش بینی، تجزیه و تحلیل هزینه، تخصیص منابع، مدیریت وظایف و گزارش دارن، پمنا از رقبا بهتر عمل می کنه.</span>
                        <span className="block">فرزین مرادی</span>
                        <span>مدیر پروژه</span>
                    </div>
                </div>
               <Button className="w-fit p-button-text flex gap-2" label={'توضیحات بیشتر'} icon="pi pi-arrow-left" iconPos={'right'}/>
            </div>

        </div>
    </div>;
}
function Section3() {
    return <div className="flex justify-content-center h-screen"
                style={{backgroundImage: `url(${assetImage.replace("{{IMAGE}}", "bg.jpg")})`}}>
        {/*<img alt={'bg'} src={assetImage.replace("{{IMAGE}}", "bg.jpg")}/>*/}

        <div className="w-10 flex">
            <div className="flex flex-1 flex-column justify-content-center align-content-end w-10">
                <div className="flex gap-2 w-full p-3">
                    <div className="font-bold text-2xl w-5">در هر جایی کارها رو برنامه ریزی کن و در محل کار اجرا کن
                    </div>
                    <div className="flex flex-column w-6">
                        <span> با دقت کارها و هرچیزی رو که لازم داری برنامه ریزی کن و بعد از اون با اپلیکشین موبایل پمنا در هرجای دنیا دستور کارها ، پروژه ها و کسب و کارت رو مدیریت کن</span>
                        <Button className="w-fit p-button-text gap-2 text-green-600" label={"توضیحات بیشتر"}
                                icon="pi pi-arrow-left" iconPos={"right"}/>
                    </div>
                </div>
                <div className="w-full pt-3 p-4">
                    <img alt={"section3img.jpg"} className="w-full pl-3"
                         src={assetImage.replace("{{IMAGE}}", "section1img.jpg")}/>
                </div>
            </div>
            <div className="w-4 flex justify-content-center align-items-center flex-column gap-3">
                <img alt={"iPhone 14 & 15 Pro Max.jpg"} height={"75%"}
                     src={assetImage.replace("{{IMAGE}}", "iPhone 14 & 15 Pro Max.jpg")}/>
                <div className="flex flex-column w-fit pr-8">
                    <img alt={"app-store"} width={"65%"} src={assetImage.replace("{{IMAGE}}", "app-store.jpg")}/>
                    <img alt={"bazaar"} width={"65%"} src={assetImage.replace("{{IMAGE}}", "bazaar.jpg")}/>
                    <img alt={"google-play"} width={"65%"} src={assetImage.replace("{{IMAGE}}", "google-play.jpg")}/>
                </div>
            </div>
        </div>
    </div>;
}
function Section4() {


    const items=[
        {image:"Group1.png",title:"همه اسناد در یک جا",description:"همه اسناد پروژه و کسب وکارت رو در یکجا ذخیره کن! دیگه نیازی به جستجو در ایمیل یا پیام ها نیست."},
        {image:"Group1.png",title:"خیالت راحت",description:"با کمک دستیار حسابداری پمنا همه اعضا میتونن به راحتی هزینه ها و درآمد ها رو ثبت کنن تا مدیریت دقیقی روی بخش مالی پروژه ها و کسب و کارت داشته باشی"},
        {image:"Group2.png",title:"جلوگیری از اتلاف وقت",description:"با کمک دستیار حسابداری پمنا همه اعضا میتونن به راحتی هزینه ها و درآمد ها رو ثبت کنن تا مدیریت دقیقی روی بخش مالی پروژه ها و کسب و کارت داشته باشی"},
        {image:"Group3.png",title:"دستیار حسابداری",description:"با کمک دستیار حسابداری پمنا همه اعضا میتونن به راحتی هزینه ها و درآمد ها رو ثبت کنن تا مدیریت دقیقی روی بخش مالی پروژه ها و کسب و کارت داشته باشی"},
        {image:"Group4.png",title:"دسترسی به پروژه ها در همه جا",description:"با کمک دستیار حسابداری پمنا همه اعضا میتونن به راحتی هزینه ها و درآمد ها رو ثبت کنن تا مدیریت دقیقی روی بخش مالی پروژه ها و کسب و کارت داشته باشی"},
    ]


    return <div className="flex flex-column bg-blue-50">
        <div className="flex justify-content-center align-items-center pr-7">
            <div className="w-4 pb-8">
                <span className="text-lg font-bold block">در محیطی امن کارهاتو انجام بده</span>
                <span className="text-sm">کار بر روی پروژه ها بدون به خطر افتادن اطلاعات حساس به لطف تعیین نقش های انعطاف پذیر ،تعیین سطح دسترسی برای اعضا ،تعیین محدودیت برای پروژه ها و اسناد اقدامات امنیتی در بالاترین سطح</span>
                <Button className="p-button-text gap-2 text-sm p-button-sm" label={"توضیحات بیشتر"} icon="pi pi-arrow-left" iconPos={"right"}/>
            </div>
            <div className="w-full flex justify-content-center pb-8 pt-8">
                <img alt={"section3img.jpg"} className="w-8 pl-3"
                     src={assetImage.replace("{{IMAGE}}", "section1img.jpg")}/>
            </div>
        </div>
        <div className="flex justify-content-center gap-2">

            {items.map((i)=>{return <ItemComponent image={i.image} title={i.title} description={i.description}/>})}

        </div>

    </div>;
}
function Section5() {
    return <div className="flex flex-column align-items-center justify-content-center bg-blue-900">
        <div className="flex justify-content-around w-8 pb-6 pt-6">
            <div className="w-4">
                <span className="text-xl text-white">منابع پروژه و کسب و کارت رو بصورت هوشمند مدیریت کن</span>
            </div>
            <div className="flex flex-column gap-2 w-3">
                <span className="text-xs text-white block">مدیریت هزینه پروژه ها و کسب و کارت رو هوشمند کن</span>
                <span className="text-xs text-white block">برنامه ریزی کن و بعد حجم کارها را مدیریت کن</span>
                <span className="text-xs text-white block">در طول پروژه تمام کارها را به راحتی رهگیری کن</span>
                <Button className="w-fit p-button-text text-green-700 text-xs p-button-sm p-0" label={"توضیحات بیشتر"} icon="pi pi-arrow-left" iconPos={"right"}/>
            </div>
        </div>
        <div className="flex justify-content-center gap-3">
            <img alt={"Rectangle.png"} width={"40%"} src={assetImage.replace("{{IMAGE}}", "Rectangle.png")}/>
            <img alt={"Rectangle2.png"} width={"40%"} src={assetImage.replace("{{IMAGE}}", "Rectangle2.png")}/>
        </div>
        <div className="flex gap-7 w-7 p-6 ">
            <div className="flex justify-content-start flex-column gap-2">
                <span className="font-semibold text-sm text-white">همیشه میدونی ساعت واقعی کارهای اعضا تیمت چقدره</span>
                <span className="text-xs text-white">به راحتی به ساعت و حجم کار اعضای تیم خودت دسترسی داشته باش و آنها را مدیریت کن</span>
            </div>
            <div className="flex justify-content-start flex-column gap-2">
                <span className="font-semibold text-sm text-white">بدون استرس کارها رو رهگیری کن</span>
                <span className="text-xs text-white">براحتی اعضا را گروه بندی و بصورت اختصاصی کارهای اونها را در پروژه هات رهگیری کن</span>

            </div>
        </div>



    </div>;
}
function Section6() {

    const items=[
        {
            image:"copy.png",
            title:"پروژه های مشابه ت رو سریع شروع کن",
            description:"با قابلیت کپی کردن پروژه ، ذخیره کردن به عنوان نمونه و حتی قابلیت به اشتراک گذاری، پروژه های جدیدت را به سرعت برنامه ریزی کن"},
        {
            image:"report.png",
            title:"با تحلیل گر پمنا به بینشی عمیق برس",
            description:"تحلیلگر پمنا ، داشبورد پروژه و همینطور گزارش های موثر همیشه کنارتن تا براحتی متوجه بشی کدوم پروژه بهترین عملکرد را برای تیمت داشته و نقاط ضعفت رو بشناسی" +
                "تحلیلگر پمنا یه مشاوره خوبه واست."},
        {
            image:"time.png",
            title:"شرکا و ذی نفعان پروژه رو مدیریت کن",
            description:"با قابلیت های متعدد مثل پرینت گزارش ها،اشتراک گذاری داشبود،حتی دعوت از شرکا و ذی نفعان بصورت مهمان در پروژه اونها رودر جریان پیشرفت کارها قراربده"},
        {
            image:"done.png",
            title:"همه باهم هماهنگید",
            description:"با مدیریت تیم ها ،پروژه ها در نرم افزار پمنا بسادگی اهداف سازمان و کسب و کار خودت رو یکپارچه کن"},
    ]
    const itemConnecting=[
        {
            image:"microsoft.jpg",
            title:"اتصال به Microsoft Project ",
            description:"به راحتی با نرم افزار Microsoft Project متصل شوید و فایل های اکسل و CSV پروژه را به صورت دو طرفه به اشتراک بگذارید",
            color:"bg-orange-500",
            "font-color":"#fff",
        },
        {
            image:"google.svg",
            title:"اتصال به Google ",
            description:"با پمنا میتوانید کارهای خود را طریق نرم افزار گوگل مدیریت کنید ، همچنین میتوانید با Google Drive و Google Calendars خود همگام باشید",
            color:"bg-blue-500",
            "font-color":"#fff",

        },


        {
            image:"Setting.svg",
            title:"اتصال به نرم افزار های دیگر ",
            description:"با قابلیت API پمنا به راحتی با هر نرم افزاری ادغام شوید و بهره وری خود را افزایش دهید",
            color:"bg-green-700",
            "font-color":"#fff",
        },
    ]



    return <div className="flex flex-column align-items-center justify-content-center bg-blue-50">
        <div className="flex justify-content-around w-8 pb-6 pt-6">
            <div className="w-4">
                <span className="font-bold text-xl">مدیریت پورتفولیو پروژه ها و موثرترین گزارش ها همه در یکجا</span>
            </div>
            <div className="flex flex-column gap-2 w-4 text-xs">
                <span>با پمنا تمام پروژه های خود را به شکل بهینه و موثر مدیریت کن</span>
                <span>با استفاده از مدیریت پورتفولیو پروژه ها ، به پروژه هات منابع اختصاص بده ، </span>
                <span>بودجه بندی پروژه ها رو متعادل کن و هزینه پروژه ها را بهینه سازی کن .</span>
                <span>همچنین با استفاده از گزارش گیری قدرتمند نقشه راه کسب و کار خود را بهینه </span>
                <span>کن و موفقیت کسب و کارت رو تضمین کن</span>
                <Button className="w-fit p-button-text p-button-sm gap-2 text-green-700 p-0" label={"توضیحات بیشتر"} icon="pi pi-arrow-left" iconPos={"right"}/>
            </div>
        </div>
        <div className="flex justify-content-center pb-6">
            {items.map((i) => {
                return <ItemComponent image={i.image} title={i.title} description={i.description}/>
            })}
        </div>
        <div className="flex justify-content-center w-6">
            <img alt={"Rectangle6.png"} src={assetImage.replace("{{IMAGE}}", "Rectangle6.png")} className="w-full"/>
        </div>
        <div className="flex justify-content-center flex-column align-items-center">
            <span className="text-lg font-bold block">
                به راحتی پمنا رو به نرم افزارهای مدیریت کار و پروژه و نرم افزارهای مالی دیگه وصل کن و بهره وریت رو افزایش بده
            </span>
            <div className="flex gap-3 justify-content-center">
                {itemConnecting.map((i)=>{return <ItemConnecting  title={i.title} description={i.description} image={i.image} color={i.color} fontColor={i['font-color']}/>})}

            </div>
        </div>
        <div className="flex flex-column justify-content-center align-items-center">
            <img alt={'pamna'} className="w-7rem" src={assetImage.replace("{{IMAGE}}", "pamna.png")}/>
            <span>پمنا نرم افزاری قدرتمند برای مدیران و انعطاف پذیر برای تمام تیم ها</span>
        </div>
        <div className="flex justify-content-center gap-3 p-3">
            <div className="bg-gray-200 flex justify-content-center flex-column align-items-center w-2 p-3">
                <img alt={'pamna'} className="w-5rem" src={assetImage.replace("{{IMAGE}}", "pamna.png")}/>
                <span>
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و ...
            </span>

            </div>
            <div className="bg-gray-200 flex justify-content-center flex-column align-items-center w-2 p-3">
                <img alt={'pamna'} className="w-5rem" src={assetImage.replace("{{IMAGE}}", "pamna.png")}/>
                <span>
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و ...
            </span>

            </div>
            <div className="bg-gray-200 flex justify-content-center flex-column align-items-center w-2 p-3">
                <img alt={'pamna'} className="w-5rem" src={assetImage.replace("{{IMAGE}}", "pamna.png")}/>
                <span>
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و ...
            </span>

            </div>
        </div>
        <div className="flex justify-content-center align-items-center gap-3 flex-column">
            <p className="font-semibold text-lg">واسه شروع 30 روز، تمام امکانات پمنا رو رایگان در اختیارت میذاریم</p>
            <span className="block">ما در پمنا سریع بهت پاسخ میدیم و برای پیشرفت کسب و کارت همیشه نوآوری داریم</span>
               <div className="flex gap-2 w-3">
                   <InputText className="flex-1" placeholder={'شماره تلفن همراه'}/>
                   <Button className="p-button-success p-2 text-xs pr-5 pl-5" label={'رایگان شروع کنید'}/>
               </div>
        </div>

    </div>;
}
function Section7() {



    const itemsfooter=[
        {
           title:'قابلیت ها',
            items:[
                'نرم افزار مدیریت کار و پروژه پمنا',
                'مدیریت منابع پروژه',
                'خودکار سازی گردش کارها',
                'گانت چارت',
                'داشبورد پروژه و تحلیل گر کسب و کار',
                'مدیریت دستورکارها',
                'مدیریت پورتفولیو پروژه ها',
                'ابزار های مدیریت پروژه',
                'مدیریت مالی پروژه و کسب و کار',
            ],
        },
        {
           title:'قابلیت ها',
            items:[
                'نرم افزار مدیریت کار و پروژه پمنا',
                'مدیریت منابع پروژه',
                'خودکار سازی گردش کارها',
                'گانت چارت',
                'داشبورد پروژه و تحلیل گر کسب و کار',
                'مدیریت دستورکارها',
                'مدیریت پورتفولیو پروژه ها',
                'ابزار های مدیریت پروژه',
                'مدیریت مالی پروژه و کسب و کار',
            ],
        },
        {
           title:'قابلیت ها',
            items:[
                'نرم افزار مدیریت کار و پروژه پمنا',
                'مدیریت منابع پروژه',
                'خودکار سازی گردش کارها',
                'گانت چارت',
                'داشبورد پروژه و تحلیل گر کسب و کار',
                'مدیریت دستورکارها',
                'مدیریت پورتفولیو پروژه ها',
                'ابزار های مدیریت پروژه',
                'مدیریت مالی پروژه و کسب و کار',
            ],
        },
        {
           title:'قابلیت ها',
            items:[
                'نرم افزار مدیریت کار و پروژه پمنا',
                'مدیریت منابع پروژه',
                'خودکار سازی گردش کارها',
                'گانت چارت',
                'داشبورد پروژه و تحلیل گر کسب و کار',
                'مدیریت دستورکارها',
                'مدیریت پورتفولیو پروژه ها',
                'ابزار های مدیریت پروژه',
                'مدیریت مالی پروژه و کسب و کار',
            ],
        },
        {
           title:'قابلیت ها',
            items:[
                'نرم افزار مدیریت کار و پروژه پمنا',
                'مدیریت منابع پروژه',
                'خودکار سازی گردش کارها',
                'گانت چارت',
                'داشبورد پروژه و تحلیل گر کسب و کار',
                'مدیریت دستورکارها',
                'مدیریت پورتفولیو پروژه ها',
                'ابزار های مدیریت پروژه',
                'مدیریت مالی پروژه و کسب و کار',
            ],
        },
    ]



    function ItemFooter({data}) {
        return (
            <div>
                <span className="font-semibold">{data.title}</span>
                {data.items.map((i)=>{return<span className="block">{i}</span>})}
            </div>
        )
    }



    return <div>
        <div className="flex justify-content-center gap-4">
            <ItemFooter data={itemsfooter[0]}/>
            <ItemFooter data={itemsfooter[1]}/>
            <ItemFooter data={itemsfooter[2]}/>
            <ItemFooter data={itemsfooter[3]}/>
        </div>
        <div>
            <div className="flex gap-3">
                <div className="flex justify-content-center align-items-center w-3">
                    <ItemFooter data={itemsfooter[4]}/>
                </div>
                <div className="flex flex-1 justify-content-center align-items-center gap-3">
                    <div className="flex flex-column">
                        <span>شبکه های اجتماعی</span>
                        <div className="flex gap-3">
                            <img alt={"Twitter-X.svg"} width={"12%"} src={assetImage.replace("{{IMAGE}}", "Twitter-X.svg")}/>
                            <img alt={'logonama.png'} width={"12%"} src={assetImage.replace("{{IMAGE}}", "logonama.png")}/>
                            <img alt={"default-share.png"} width={"25%"} src={assetImage.replace("{{IMAGE}}", "default-share.png")}/>
                        </div>
                    </div>
                    <div>
                        <span>نماد ها</span>
                        <div className="flex gap-3">
                            <img alt={'logonama.png'} width={"12%"} src={assetImage.replace("{{IMAGE}}", "logonama.png")}/>
                            <img alt={'logonama.png'} width={"12%"} src={assetImage.replace("{{IMAGE}}", "logonama.png")}/>
                            <img alt={'logonama.png'} width={"12%"} src={assetImage.replace("{{IMAGE}}", "logonama.png")}/>
                        </div>
                    </div>


                </div>
            </div>
        </div>

        <Divider className="" layout="vertical" align="center">
            <div className="text-center text-gray-600">
                <b>پمنا 1402</b>
            </div>
            <div className="flex gap-1">
                <Button className="p-button-text p-button-info" label={"شرایط استفاده"}/>
                <Button className="p-button-text p-button-info" label={"حریم خصوصی"}/>

            </div>
        </Divider>

    </div>;
}



function App() {


  return (
      <div>
          <Section1/>
          <Section2/>
          <Section3/>
          <Section4/>
          <Section5/>
          <Section6/>
          <Section7/>


      </div>
  );
}

export default App;
