import React from 'react';

const supportChannels = [
    {
        title: 'شراكات المشاريع',
        description: 'للمبادرات الجديدة، وجلسات اكتشاف الفرص، وتسريع خارطة الطريق.',
        details: ['partnerships@alnahda.ly', '+218 (91) 000-0000', 'نرد خلال يوم عمل واحد'],
    },
    {
        title: 'دعم المنصات',
        description: 'للعملاء الحاليين الذين يحتاجون إلى تواصل مع قادة الهندسة على مدار الساعة.',
        details: ['support@alnahda.ly', 'قنوات Slack Connect', 'خط طوارئ مخصص يُشارك عند التعاقد'],
    },
    {
        title: 'الإعلام والفعاليات',
        description: 'للطلبات الإعلامية أو الدعوات للتحدث في المؤتمرات وحلقات النقاش.',
        details: ['media@alnahda.ly', 'ملف المتحدثين متوفر عند الطلب'],
    },
];

const Contact: React.FC = () => {
    return (
        <>
            <section className="section container" aria-labelledby="contact-intro">
                <div className="section__header">
                    <span className="section__eyebrow">لنبنِ المستقبل معًا</span>
                    <h1 id="contact-intro" className="section__title">
                        شاركنا رؤيتك الرقمية، وسنرسم لك الطريق بخطوات واضحة.
                    </h1>
                    <p className="section__description">
                        حدّثنا عن فريقك، والأهداف التي تسعى إليها، وأي مواعيد مهمة لديك. سنرد عليك بأجندة مخصصة لجلسة
                        استكشافية وفريق الخبراء الأنسب.
                    </p>
                </div>
                <div className="grid grid--columns-2">
                    <form>
                        <div>
                            <label htmlFor="name">الاسم الكامل</label>
                            <input type="text" id="name" name="name" placeholder="سارة بن عمران" required />
                        </div>
                        <div>
                            <label htmlFor="email">البريد المهني</label>
                            <input type="email" id="email" name="email" placeholder="you@company.com" required />
                        </div>
                        <div>
                            <label htmlFor="company">الشركة</label>
                            <input type="text" id="company" name="company" placeholder="النهضة للاستشارات الرقمية" />
                        </div>
                        <div>
                            <label htmlFor="timeline">الإطار الزمني المثالي</label>
                            <input type="text" id="timeline" name="timeline" placeholder="مثال: الإطلاق قبل الربع الثالث" />
                        </div>
                        <div>
                            <label htmlFor="message">تفاصيل المشروع</label>
                            <textarea
                                id="message"
                                name="message"
                                placeholder="ما المشكلة التي ترغب بحلها؟ كيف تبدو مؤشرات النجاح؟"
                                required
                            ></textarea>
                        </div>
                        <button type="submit" className="cta-button">
                            أرسل الرسالة
                        </button>
                    </form>
                    <div className="card">
                        <h2 className="card__title">تواصل مباشر مع الشركاء</h2>
                        <p className="text-muted card__description">
                            يراجع فريق القيادة لدينا كل رسالة واردة. نعود إليك خلال يوم عمل واحد بخطوات واضحة، ودراسة
                            حالات مشابهة، وفريق مختص بالحوار الافتتاحي.
                        </p>
                        <ul className="card__list">
                            <li>
                                <strong>وتيرة الاجتماعات:</strong> عادة جلسة اكتشاف لمدة ٤٥ دقيقة تليها ورشة تعمق تقنية.
                            </li>
                            <li>
                                <strong>عينات الشيفرة والمراجع:</strong> متاحة بعد توقيع اتفاقية سرية، ونشارك مخططات
                                معمارية وأدلة تشغيل مختارة.
                            </li>
                            <li>
                                <strong>العمل عن بُعد أو في الموقع:</strong> نعمل عن بُعد في مختلف الدول العربية مع
                                زيارات مكثفة عند الحاجة.
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            <section className="section container" aria-labelledby="contact-channels">
                <div className="section__header">
                    <span className="section__eyebrow">ابقَ على تواصل</span>
                    <h2 id="contact-channels" className="section__title">
                        اختر القناة الأنسب لاستفسارك.
                    </h2>
                </div>
                <div className="grid grid--columns-3">
                    {supportChannels.map((channel) => (
                        <article key={channel.title} className="card">
                            <h3 className="card__title">{channel.title}</h3>
                            <p className="text-muted card__description">{channel.description}</p>
                            <ul className="card__list">
                                {channel.details.map((item) => (
                                    <li key={item}>{item}</li>
                                ))}
                            </ul>
                        </article>
                    ))}
                </div>
            </section>
        </>
    );
};

export default Contact;
