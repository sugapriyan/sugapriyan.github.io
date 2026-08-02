import { motion } from 'framer-motion';
import React from 'react';
import { Landmark, Globe, Layers, ExternalLink, ShieldCheck, CreditCard } from 'lucide-react';

const Works = () => {
    const works = [
        {
            title: 'TNLAATAN (Indian Overseas Bank)',
            category: 'Banking IT Portal',
            icon: <Landmark size={24} />,
            link: 'https://tnlaatan.iob.bank.in',
            desc: 'A portal for making timely compensation payments to landowners whose land is acquired by the State Government for various development works. Served as Business Analyst, owning the project end to end — from requirements gathering through to production implementation.',
            skills: [
                { name: 'Banking IT', type: 'technical' },
                { name: 'Government', type: 'leadership' },
                { name: 'Web Portal', type: 'tools' },
                { name: 'Business Analysis', type: 'leadership' }
            ]
        },
        {
            title: 'TANCAM TTP Portal',
            category: 'e-Governance Platform',
            icon: <Globe size={24} />,
            link: 'https://ttp.tancam.in',
            desc: 'An end-to-end platform for running multiple trainings on any given day — covering trainer registration, training allocation, progress monitoring, and payment management. Served as Project Relationship Manager and Forward Deployed Developer, building the complete web interface and a Flutter Android mobile app using agentic AI.',
            skills: [
                { name: 'Government IT', type: 'technical' },
                { name: 'e-Governance', type: 'leadership' },
                { name: 'Web Portal', type: 'tools' },
                { name: 'Flutter', type: 'tools' },
                { name: 'Mobile App', type: 'technical' },
                { name: 'Agentic AI', type: 'leadership' }
            ]
        },
        {
            title: 'Bank Internal Projects (Project Manager)',
            category: 'Enterprise Banking Suite',
            icon: <Layers size={24} />,
            desc: 'A suite of internal banking applications delivered for Indian Overseas Bank, where I served as Project Manager overseeing development, compliance, security, and payment integration.',
            skills: [
                { name: 'Banking IT', type: 'technical' },
                { name: 'Risk & Compliance', type: 'leadership' },
                { name: 'System Integration', type: 'technical' },
                { name: 'Project Management', type: 'leadership' },
                { name: 'Payment Gateway', type: 'tools' }
            ],
            subModules: [
                {
                    name: 'GAD Branch Lease',
                    desc: 'Manages land and rent details for all branches and handles the renewal and branch-shifting process with a built-in approval workflow.',
                    isInternal: true
                },
                {
                    name: 'Gold Loan Rate',
                    desc: 'Calculates the per-gram gold loan rate based on the values of different gold purities (24ct, 22ct, 18ct).',
                    isInternal: true
                },
                {
                    name: 'Gold Loan Score',
                    desc: 'Generates a customer score from inputs such as age, years of relationship, and repayment history to determine the eligible loan amount.',
                    isInternal: true
                },
                {
                    name: 'Consent Management',
                    desc: 'Captures customer consent for the use of submitted proof documents via OTP verification.',
                    isInternal: true
                },
                {
                    name: 'Pytax',
                    link: 'https://pytax.iob.bank.in',
                    desc: 'Collects tax payments from landowners based on their demand number; amounts are bulk-uploaded by an admin and collected through a payment gateway.'
                },
                {
                    name: 'TNUHDB',
                    link: 'https://tnuhdb.iob.bank.in',
                    desc: 'Collects payments from beneficiaries towards government-allotted flats. Project-wise flat amounts are set by the department admin and paid in installments online or by cash, with PoS machine integration for cash collection.'
                }
            ]
        }
    ];

    return (
        <section id="works" className="works section-padding">
            <motion.h2
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, amount: 0.1 }}
            >
                Works Done
            </motion.h2>
            <div className="title-underline"></div>

            <div className="works-grid">
                {works.map((work, index) => (
                    <motion.div
                        key={index}
                        className={`work-card glass ${work.subModules ? 'work-card-featured' : ''}`}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        viewport={{ once: true, amount: 0.1 }}
                    >
                        <div className="work-header">
                            <div className="work-icon-bg">{work.icon}</div>
                            <div className="work-header-right">
                                <span className="work-category">{work.category}</span>
                                {work.link && (
                                    <a
                                        href={work.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="work-visit-btn"
                                    >
                                        Visit <ExternalLink size={14} />
                                    </a>
                                )}
                            </div>
                        </div>

                        <h3>{work.title}</h3>
                        <p className="work-desc">{work.desc}</p>

                        {/* Sub-modules if present */}
                        {work.subModules && (
                            <div className="submodules-container">
                                <h4 className="submodules-heading">Core Modules & Applications</h4>
                                <div className="submodules-grid">
                                    {work.subModules.map((sub, sIdx) => (
                                        <div key={sIdx} className="submodule-card glass">
                                            <div className="submodule-header">
                                                <span className="submodule-title">{sub.name}</span>
                                                {sub.isInternal ? (
                                                    <span className="internal-badge">
                                                        <ShieldCheck size={12} /> Internal System
                                                    </span>
                                                ) : (
                                                    <a
                                                        href={sub.link}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="submodule-visit-btn"
                                                    >
                                                        Visit <ExternalLink size={12} />
                                                    </a>
                                                )}
                                            </div>
                                            <p className="submodule-desc">{sub.desc}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        <div className="skill-badges-container">
                            {work.skills.map((skill, sIdx) => (
                                <motion.span
                                    key={sIdx}
                                    className={`skill-badge ${skill.type}`}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.4, delay: (index * 0.1) + (sIdx * 0.04) }}
                                    viewport={{ once: true, amount: 0.1 }}
                                >
                                    {skill.name}
                                </motion.span>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Works;
