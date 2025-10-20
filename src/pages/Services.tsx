import React from 'react';
import { Link } from 'react-router-dom';

const serviceCatalog = [
    {
        title: 'هندسة المنتجات الرقمية',
        summary:
            'نبني ونطوّر تطبيقات ويب وموبايل قابلة للتوسع، مع تجربة مستخدم عربية، ونظم خلفية آمنة تدعم العمل المستمر.',
        deliverables: [
            'هندسة معمارية دقيقة وخارطة طريق تقنية',
            'مكتبات مكونات واجهات عربية قابلة لإعادة الاستخدام',
            'أتمتة كاملة لعمليات النشر والاختبار المستمر',
        ],
        technologies: ['React', 'Node.js', 'NestJS', 'React Native', 'GraphQL'],
    },
    {
        title: 'تحديث المنصات والبنى التحتية',
        summary:
            'نحوّل الأنظمة التقليدية إلى خدمات سحابية حديثة مع مراقبة شاملة، واختبارات تلقائية، وتجربة مطورين محسّنة.',
        deliverables: ['تفكيك الخدمات إلى مجالات مصغّرة', 'خطط انتقال مرنة دون توقف', 'أدلة تشغيل ودعم SRE'],
        technologies: ['Azure', 'AWS', 'Docker', 'Kubernetes', 'Terraform'],
    },
    {
        title: 'البيانات والذكاء الاصطناعي',
        summary:
            'نُنشئ حوكمة بيانات، ونطوّر نماذج تعلم آلي، ونجرب حلول الذكاء الاصطناعي التوليدي التي تدعم قرارات عملك يوميًا.',
        deliverables: ['تصميم منصات بيانات موحدة', 'مختبر تجارب للذكاء الاصطناعي', 'سياسات خصوصية وحوكمة مسؤولة'],
        technologies: ['Python', 'dbt', 'Snowflake', 'Databricks', 'OpenAI'],
    },
];

const engagementModels = [
    {
        name: 'فرق مدمجة',
        description:
            'مهندسون ومصممون وقادة منتج يعملون جنبًا إلى جنب مع فريقكم لتسريع خارطة الطريق والحفاظ على الجودة.',
        suitedFor: ['توسيع قدرات الفريق الداخلي', 'تسريع تسليم المزايا الجديدة', 'رفع كفاءة العمليات التقنية'],
    },
    {
        name: 'وحدات استشارية',
        description:
            'مختصون في المعمارية، وDevOps، والبيانات يجرون تقييمات معمقة ويقدمون توصيات تنفيذية قابلة للتطبيق.',
        suitedFor: ['تحديث المنصات الحرجة', 'التدقيق الفني قبل الاستثمار', 'توجيه قرارات الاندماج والاستحواذ'],
    },
    {
        name: 'مختبرات الابتكار',
        description:
            'فرق صغيرة وسريعة تختبر النماذج الأولية، وتجمع ردود الفعل من المستخدمين، وتتحقق من ملاءمة السوق في أسابيع.',
        suitedFor: ['إطلاق منتجات جديدة', 'دعم مسرعات الأعمال', 'فرق الابتكار في المؤسسات الكبرى'],
    },
];

const accelerators = [
    {
        title: 'حزمة الجاهزية للإطلاق',
        description:
            'قوائم تحقق للامتثال، وأدلة مراقبة، وخطط رجوع تضمن أن كل إصدار آمن ومراقَب من اللحظة الأولى.',
    },
    {
        title: 'لوحة صحة الهندسة',
        description:
            'مؤشرات حية لنسبة التوافر، وتكرار النشر، والزمن المتوسط لحل المشكلات، تساعد القيادات على اتخاذ قرارات دقيقة.',
    },
    {
        title: 'إطار تجارب الذكاء الاصطناعي',
        description:
            'مكتبات محفزات، وأدوات تقييم، وأدلة حوكمة لضمان دمج الذكاء الاصطناعي التوليدي بطريقة مسؤولة.',
    },
];

const Services: React.FC = () => {
    return (
        <>
            <section className="section container" aria-labelledby="services-intro">
                <div className="section__header">
                    <span className="section__eyebrow">قدرات شاملة</span>
                    <h1 id="services-intro" className="section__title">
                        فرق تجمع بين الابتكار التقني وفهم الأعمال.
                    </h1>
                    <p className="section__description">
                        سواء كنت تطلق منتجًا جديدًا أو تطوّر منصة حيوية، فإننا نلائم طريقة عملنا مع ثقافتك التقنية
                        وأهدافك الاستراتيجية لنضمن أثرًا واضحًا وسريعًا.
                    </p>
                </div>
                <div className="grid grid--columns-3">
                    {serviceCatalog.map((service) => (
                        <article key={service.title} className="card">
                            <h2 className="card__title">{service.title}</h2>
                            <p className="text-muted card__description">{service.summary}</p>
                            <div className="card__section">
                                <h3 className="card__meta-title">المخرجات الرئيسية</h3>
                                <ul className="card__list card__list--bulleted">
                                    {service.deliverables.map((item) => (
                                        <li key={item}>{item}</li>
                                    ))}
                                </ul>
                            </div>
                            <div className="card__section">
                                <h3 className="card__meta-title">التقنيات الأساسية</h3>
                                <ul className="tag-list">
                                    {service.technologies.map((tech) => (
                                        <li key={tech} className="pill pill--neutral">
                                            {tech}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </article>
                    ))}
                </div>
            </section>

            <section className="section container" aria-labelledby="engagement-models">
                <div className="section__header">
                    <span className="section__eyebrow">نماذج الشراكة</span>
                    <h2 id="engagement-models" className="section__title">
                        اختر الأسلوب الذي يناسب سرعتك وطبيعة عملك.
                    </h2>
                </div>
                <div className="grid grid--columns-3">
                    {engagementModels.map((model) => (
                        <article key={model.name} className="card">
                            <h3 className="card__title">{model.name}</h3>
                            <p className="text-muted card__description">{model.description}</p>
                            <ul className="card__list card__list--bulleted">
                                {model.suitedFor.map((item) => (
                                    <li key={item}>{item}</li>
                                ))}
                            </ul>
                        </article>
                    ))}
                </div>
            </section>

            <section className="section container" aria-labelledby="accelerators">
                <div className="section__header">
                    <span className="section__eyebrow">مسرعات التنفيذ</span>
                    <h2 id="accelerators" className="section__title">
                        أدوات مجربة تقلل المخاطر وتضاعف قيمة الاستثمار.
                    </h2>
                </div>
                <div className="grid grid--columns-3">
                    {accelerators.map((accelerator) => (
                        <article key={accelerator.title} className="card">
                            <h3 className="card__title">{accelerator.title}</h3>
                            <p className="text-muted card__description">{accelerator.description}</p>
                        </article>
                    ))}
                </div>
                <div className="hero__actions">
                    <Link to="/contact" className="cta-button">
                        احجز جلسة اكتشاف تقنية
                    </Link>
                    <Link to="/about" className="cta-button cta-button--secondary">
                        تعرّف على فريق القيادة
                    </Link>
                </div>
            </section>
        </>
    );
};

export default Services;
