import React from 'react';
import { Link } from 'react-router-dom';

const services = [
    {
        title: 'الاستشارات والتحول الرقمي',
        description:
            'نرافق المؤسسات في رسم خارطة طريق رقمية واقعية، ونحدد المبادرات الأكثر تأثيرًا، ثم نبني فرقًا متعددة التخصصات لتنفيذها بسرعة وجودة.',
        highlights: [
            'دراسة الوضع الحالي وتحليل جاهزية الفرق والأنظمة',
            'تصميم نماذج تشغيل مرنة تدعم العمل عن بُعد والهجين',
            'برامج تدريب ونقل معرفة تبني قدرات الفريق الداخلي',
        ],
    },
    {
        title: 'تطوير المنتجات والخدمات الرقمية',
        description:
            'نبني تطبيقات الويب والجوال، ونطوّر تجارب مستخدم عربية مدروسة، مع واجهات قابلة للتوسع وخدمات خلفية موثوقة.',
        highlights: [
            'واجهات وتجارب استخدام ملائمة للغة العربية والاتجاه من اليمين إلى اليسار',
            'بنية خلفية آمنة مع مراقبة وأتمتة للنشر المستمر',
            'اختبارات جودة شاملة وقياسات أداء لحماية التجربة',
        ],
    },
    {
        title: 'البيانات والذكاء الاصطناعي',
        description:
            'نُحوّل البيانات المبعثرة إلى قراءات عملية، ونطوّر مساعدين ذكيين يدعمون فرق العمل، مع حوكمة تضمن الخصوصية والامتثال.',
        highlights: [
            'منصات بيانات مركزية ولوحات تحكم لحظية',
            'نماذج ذكاء اصطناعي توليدية مع مراقبة وضبط للمخاطر',
            'أطر حوكمة وسياسات خصوصية متوافقة مع التشريعات المحلية',
        ],
    },
];

const educationSolutions = [
    {
        title: 'حلول التعليم الذكي',
        description:
            'نبني منصات تعليمية تشاركية للمدارس والجامعات، توفر محتوى تفاعليًا، وتتابع تقدّم المتعلمين، وتربط أصحاب المصلحة بسلاسة.',
    },
    {
        title: 'أكاديمية النهضة التقنية',
        description:
            'برامج مكثفة تُصمم خصيصًا لرفع مهارات الفرق المحلية في مجالات التطوير السحابي، وأمن المعلومات، وإدارة المشاريع الرقمية.',
    },
];

const missionPillars = [
    'التركيز على احتياجات السوق المحلي وبناء شراكات مستدامة تدعم الاقتصاد المعرفي الليبي.',
    'الشفافية في العمل، وتوثيق كل خطوة، ومشاركة المعرفة المفتوحة مع عملائنا وشركائنا.',
    'الالتزام بمعايير الجودة والأمن السيبراني، مع مراعاة التجربة العربية في كل منتج.',
];

const Home: React.FC = () => {
    return (
        <>
            <section className="hero container">
                <div>
                    <span className="badge">حلول برمجية متكاملة للشركات الطموحة</span>
                    <div style={{ height: 20 }}></div> 
                    <hr />
                    <div style={{ height: 20 }}></div> 
                    <h1 className="hero__headline">نُحول الأفكار العربية إلى منتجات رقمية عالية الجودة وموثوقة</h1>
                    <div style={{ height: 20 }}></div> 
                    <p className="section__description">
                        نعمل مع المؤسسات التي تبحث عن شريك موثوق يقود رحلة التحول الرقمي كاملة، من التخطيط وحتى
                        التشغيل والدعم المتواصل. فرقنا متعددة التخصصات تبني تجارب متمحورة حول المستخدم، مع ضمان أمان
                        البيانات واستمرارية الخدمة عبر أحدث التقنيات السحابية.
                    </p>
                                        <div style={{ height: 20 }}></div> 

                    <div className="tag-list">
                        <span className="pill pill--neutral">من ليبيا إلى المنطقة: خبرة محلية بنظرة عالمية</span>
                        <span className="pill pill--neutral">منهجيات مرنة تعتمد على قياس الأثر الحقيقي</span>
                    </div>
                    <div className="hero__actions">
                        <Link to="/contact" className="cta-button">
                            ابدأ المحادثة
                        </Link>
                        <Link to="/services" className="cta-button cta-button--secondary">
                            استعرض خدماتنا
                        </Link>
                    </div>
                </div>
                <div className="card" aria-label="أسباب اختيار النهضة التقنية">
                    <h3 className="card__title">لماذا تختار النهضة التقنية؟</h3>
                    <ul className="card__list">
                        <li>شراكة وثيقة تبدأ من دراسة التحديات وتنتهي بإطلاق ناجح وتدريب كامل للفريق.</li>
                        <li>خبرات في تصميم الواجهات العربية من اليمين إلى اليسار مع مراعاة تفاصيل الهوية البصرية.</li>
                        <li>قدرة على بناء حلول قابلة للتوسع تدعم النمو المستقبلي وتتكامل مع الأنظمة الحالية.</li>
                    </ul>
                </div>
            </section>

            <section className="section container" aria-labelledby="services-heading">
                <div className="section__header">
                    <span className="section__eyebrow">خدمات متكاملة</span>
                    <h2 id="services-heading" className="section__title">
                        نُعيد ابتكار طريقة عملك باستخدام تقنيات موثوقة وفِرق متخصصة.
                    </h2>
                    <p className="section__description">
                        نقدّم حزمة متناسقة من الاستشارات والهندسة والتجربة، ما يسمح لك بالتركيز على هدفك بينما نهتم نحن
                        بالتفاصيل التقنية والعملياتية.
                    </p>
                </div>
                <div className="grid grid--columns-3">
                    {services.map((service) => (
                        <article key={service.title} className="card">
                            <h3 className="card__title">{service.title}</h3>
                            <p className="text-muted card__description">{service.description}</p>
                            <ul className="card__list card__list--bulleted">
                                {service.highlights.map((item) => (
                                    <li key={item}>{item}</li>
                                ))}
                            </ul>
                        </article>
                    ))}
                    <article className="card">
                        <h3 className="card__title">برنامج الشراكة الاستراتيجية</h3>
                        <p className="text-muted card__description">
                            علاقة طويلة الأمد تُدار عبر أهداف واضحة وقياسات أداء محددة، مع اجتماعات فصلية للمراجعة
                            والتطوير المستمر.
                        </p>
                        <ul className="card__list card__list--bulleted">
                            <li>تخطيط استراتيجي مشترك يشمل خارطة الطريق والتجارب المبدئية والنشر الإنتاجي.</li>
                            <li>تقارير أداء شهرية تتبع مؤشرات الجودة والإنفاق والسرعة في تسليم المزايا الجديدة.</li>
                        </ul>
                    </article>
                </div>
            </section>

            <section className="section container" aria-labelledby="education-heading">
                <div className="section__header">
                    <span className="section__eyebrow">حلول للقطاع التعليمي</span>
                    <h2 id="education-heading" className="section__title">
                        أدوات تعلّم رقمية تعزز التفاعل وتُسهل المتابعة في الوقت الحقيقي.
                    </h2>
                </div>
                <div className="grid grid--columns-2">
                    {educationSolutions.map((solution) => (
                        <article key={solution.title} className="card">
                            <h3 className="card__title">{solution.title}</h3>
                            <p className="text-muted card__description">{solution.description}</p>
                        </article>
                    ))}
                </div>
            </section>

            <section className="section container" aria-labelledby="mission-heading">
                <div className="section__header">
                    <span className="section__eyebrow">ركائز رسالتنا</span>
                    <h2 id="mission-heading" className="section__title">
                        نُقدّم قيمة حقيقية عبر تركيبة متوازنة من الخبرة المحلية والرؤية العالمية.
                    </h2>
                    <p className="section__description">
                        نعمل بروح التمكين، ونركز على نقل المعرفة وتوثيق الحلول، مع الالتزام بتجربة عميل إنسانية تدعم
                        النمو المستدام.
                    </p>
                </div>
                <div className="card">
                    <ul className="card__list card__list--bulleted">
                        {missionPillars.map((item) => (
                            <li key={item}>{item}</li>
                        ))}
                    </ul>
                </div>
                <div className="hero__actions">
                    <Link to="/contact" className="cta-button">
                        احجز جلسة استكشافية
                    </Link>
                    <Link to="/about" className="cta-button cta-button--secondary">
                        تعرّف على قصتنا
                    </Link>
                </div>
            </section>
        </>
    );
};

export default Home;
