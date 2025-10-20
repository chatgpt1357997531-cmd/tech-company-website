import React from 'react';
import { Link } from 'react-router-dom';
import TeamCard from '../components/TeamCard';

const timeline = [
    {
        year: '2015',
        title: 'الانطلاقة',
        description:
            'تأسست النهضة التقنية كمجموعة من مهندسين ليبيين يؤمنون بأن البرمجيات يمكن أن تقود التنمية الاقتصادية المحلية.',
    },
    {
        year: '2018',
        title: 'بناء الاستوديو',
        description:
            'تحولنا إلى استوديو منتجات متكامل يجمع بين التصميم، والهندسة، واستراتيجيات البيانات، لنخدم الشركات الناشئة والجهات الحكومية.',
    },
    {
        year: '2022',
        title: 'أثر إقليمي',
        description:
            'أطلقنا منصات تخدم ملايين المستخدمين في مجالات التعليم، والخدمات المالية، والرعاية الصحية، مع فرق موزعة بين ليبيا والمنطقة.',
    },
];

const values = [
    {
        title: 'نبني بتعاطف',
        description:
            'نبدأ كل مشروع بالاستماع العميق لاحتياجات المستخدمين، ونصمم تجارب تقلل التعقيد وتزيد الثقة في الحلول الرقمية.',
    },
    {
        title: 'الجودة مسؤولية مشتركة',
        description:
            'نلتزم بمعايير هندسية صارمة، ومراقبة مستمرة، وشفافية كاملة مع شركائنا لضمان حلول قابلة للصيانة والتوسع.',
    },
    {
        title: 'التعلم المستمر',
        description:
            'نستثمر في التدريب، والبحث، وتبادل الخبرات، حتى تبقى فرقنا مواكبة للتقنيات وأفضل الممارسات العالمية.',
    },
];

const leadership = [
    {
        name: 'سيف الهجار',
        role: 'الشريكة الإدارية ورئيسة استراتيجية المنتج',
        photo: 'https://i.pravatar.cc/150?img=3',
    },
    {
        name: 'ناصر الغزالي ',
        role: 'رئيس الهندسة والمنصات السحابية',
        photo: 'https://i.pravatar.cc/150?img=12',
    },
    {
        name: ' بلعيد المسلاتي',
        role: 'مديرة علوم البيانات والذكاء الاصطناعي',
        photo: 'https://i.pravatar.cc/150?img=8',
    },
];

const About: React.FC = () => {
    return (
        <>
            <section className="section container" aria-labelledby="about-intro">
                <div className="section__header">
                    <span className="section__eyebrow">حكايتنا</span>
                    <h1 id="about-intro" className="section__title">
                        شريك عربي يبني حلولاً رقمية واضحة، متينة، ومتمحورة حول الإنسان.
                    </h1>
                    <p className="section__description">
                        وُلدت النهضة التقنية من رغبة في جمع المواهب المحلية وإطلاق مشاريع ذات أثر ملموس. اليوم نعمل
                        بفِرق موزعة، ونعمل يدًا بيد مع عملائنا لتوجيه كل مرحلة من مراحل بناء المنتج الرقمي، من الفكرة
                        إلى الإطلاق والنمو.
                    </p>
                </div>
                <div className="grid grid--columns-3">
                    {timeline.map((milestone) => (
                        <article key={milestone.year} className="card" aria-label={`${milestone.year} milestone`}>
                            <span className="badge">{milestone.year}</span>
                            <h3 className="card__title">{milestone.title}</h3>
                            <p className="text-muted card__description">{milestone.description}</p>
                        </article>
                    ))}
                </div>
            </section>

            <section className="section container" aria-labelledby="about-values">
                <div className="section__header">
                    <span className="section__eyebrow">كيف نعمل</span>
                    <h2 id="about-values" className="section__title">
                        مبادئ تقود كل تعاون.
                    </h2>
                    <p className="section__description">
                        نبني علاقات عمل مبنية على الوضوح والاحترام المتبادل، ونلتزم بتوثيق ما نقوم به حتى يكون كل طرف
                        على دراية بتقدم العمل وتحدياته.
                    </p>
                </div>
                <div className="grid grid--columns-3">
                    {values.map((value) => (
                        <article key={value.title} className="card">
                            <h3 className="card__title">{value.title}</h3>
                            <p className="text-muted card__description">{value.description}</p>
                        </article>
                    ))}
                </div>
            </section>

            <section className="section container" aria-labelledby="about-team">
                <div className="section__header">
                    <span className="section__eyebrow">فريق القيادة</span>
                    <h2 id="about-team" className="section__title">
                        خبراء يعملون جنبًا إلى جنب مع فرقكم.
                    </h2>
                    <p className="section__description">
                        يظل فريق القيادة منخرطًا في التفاصيل اليومية؛ يراجع الشيفرة، ويشارك في تصميم خارطة الطريق، ويُرشد
                        الفرق الداخلية لضمان نجاح طويل الأمد.
                    </p>
                </div>
                <div className="grid grid--columns-3">
                    {leadership.map((member) => (
                        <TeamCard key={member.name} {...member} />
                    ))}
                </div>
            </section>

            <section className="section container" aria-labelledby="about-culture">
                <div className="section__header">
                    <span className="section__eyebrow">ثقافة الشراكة</span>
                    <h2 id="about-culture" className="section__title">
                        منهجيات تسريع النتائج ومشاركة المعرفة.
                    </h2>
                </div>
                <div className="grid grid--columns-2">
                    <article className="card">
                        <h3 className="card__title">فرق مدمجة</h3>
                        <p className="text-muted card__description">
                            نعمل كتفًا بكتف مع فرقكم باستخدام آليات عمل مرنة، وتواصل يومي، ولوحات متابعة مشتركة.
                        </p>
                        <ul className="card__list card__list--bulleted">
                            <li>جلسات تخطيط أسبوعية بمؤشرات واضحة للنجاح</li>
                            <li>برمجة زوجية ومراجعات مفتوحة لتبادل الخبرة</li>
                            <li>مجتمعات ممارسة للهندسة، والمنتج، وتجربة المستخدم</li>
                        </ul>
                    </article>
                    <article className="card">
                        <h3 className="card__title">نتائج قابلة للقياس</h3>
                        <p className="text-muted card__description">
                            نربط كل مبادرة بمؤشرات أداء، ونراقب البيانات لحظيًا حتى نُصحح المسار بسرعة ونحافظ على جودة
                            التجربة.
                        </p>
                        <ul className="card__list card__list--bulleted">
                            <li>ألواح تحكم تتابع سرعة النشر وجودة الشيفرة والتوافر</li>
                            <li>مقابلات دورية مع المستخدمين النهائيين لقياس الرضا</li>
                            <li>مراجعات تأثير بعد كل إصدار رئيسي</li>
                        </ul>
                    </article>
                </div>
                <div className="hero__actions">
                    <Link to="/services" className="cta-button">
                        اطّلع على خدماتنا
                    </Link>
                    <Link to="/contact" className="cta-button cta-button--secondary">
                        راسل فريقنا التنفيذي
                    </Link>
                </div>
            </section>
        </>
    );
};

export default About;
