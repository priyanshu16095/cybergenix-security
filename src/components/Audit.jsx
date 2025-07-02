import React from 'react'

function Audit() {
    return (
        <div className='comp center'>
            <div className="flex-v gap">
                <p>There are many reasons for an enterprise to prioritize a cybersecurity audit. Conducting a cybersecurity audit helps organizations identify and remediate issues that could result in a costly compliance violation, a data breach, or another serious cybersecurity incident. A cybersecurity audit identifies vulnerabilities, threats, risky practices, and weak links in cybersecurity processes and systems.</p>

                <p className="title">What is a cybersecurity audit?</p>
                <p>A cybersecurity audit is a comprehensive assessment and analysis of an organization’s cybersecurity and cyber risks.</p>

                <p className='audit__textbox'>The objective of a cybersecurity audit is to proactively identify vulnerabilities, threats, and associated mitigation options to prevent weaknesses from being exploited.</p>

                <p>Cybersecurity audits use a variety of technologies, processes, and controls to evaluate how well an organization’s networks, programs, devices, and data are protected against risks and threats. They are performed regularly, with results measured against established internal baselines, industry standards, and cybersecurity best practices. These audits can be conducted by internal IT and security teams or external, third-party organizations.</p>

                <p>While there are many kinds of cybersecurity audits that take different approaches depending on the type and size of an organization, the general objective is to help reduce cyber risk and improve the organization’s security posture. Benefits of a cybersecurity audit include:</p>

                <div className="flex-v gap-sm">
                    <p>Avoiding penalties related to violations of laws and regulations.</p>
                    <p>Catching security and system vulnerabilities proactively.</p>
                    <p>Confirming that adequate cybersecurity control mechanisms are in place to enforce policies and procedures.</p>
                    <p>Ensuring that sensitive data is protected from unauthorized access.</p>
                </div>
            </div>
        </div>
    )
}

export default Audit
