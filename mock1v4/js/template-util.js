var services = [
{
    serviceCategory: 'Operational Strategy',
    serviceItems: [{
        serviceIcon: 'fa-magnifying-glass',
        serviceName: 'Analyze Your Processes',
        serviceDescription: 'We take a focused look at how your business runs and <span class="text-imp">uncover pain points, inefficiencies, and untapped opportunities.</span>'
    },
    {
        serviceIcon: 'fa-chess',
        serviceName: 'Operational Strategy & Problem Solving',
        serviceDescription: 'We help you <span class="text-imp">rethink how your organization operates</span> — aligning people, processes, and systems for maximum impact.'
    },
    {
        serviceIcon: 'fa-users-gear',
        serviceName: 'Stakeholder Engagement & Workshops',
        serviceDescription: 'We lead <span class="text-imp">state-of-the-art visual working sessions</span> that bring people together and move decisions forward.'
    },
    {
        serviceIcon: 'fa-map',
        serviceName: 'Vision & Possibility Mapping',
        serviceDescription: 'Have a big idea but not sure where to start? We help <span class="text-imp">turn concepts into reality</span> so you can stop dreaming and start doing.'
    }]
},
{
    serviceCategory: 'Solution Design, Delivery And Integration',
    serviceItems: [{
        serviceIcon: 'fa-compass-drafting',
        serviceName: 'System Design and Requirements',
        serviceDescription: 'We design <span class="text-imp">clear, effective solutions that fit how you work</span> and we write requirements that clearly define and address your business needs.'
    },
    {
        serviceIcon: 'fa-code',
        serviceName: 'Software Development & Modernization',
        serviceDescription: 'We <span class="text-imp">custom build tools</span> and <span class="text-imp">replace or modernize outdated systems</span> to meet the needs of today and the future.'
    },
    {
        serviceIcon: 'fa-desktop',
        serviceName: 'New or Revamped Websites',
        serviceDescription: 'We create clean, easy to use websites that <span class="text-imp">elevate your brand</span> and serve your users.'
    },
    {
        serviceIcon: 'fa-mobile-screen',
        serviceName: 'Mobile App Development',
        serviceDescription: 'We build mobile tools to <span class="text-imp">keep your team productive on the go.</span>'
    }, 
    {
        serviceIcon: 'fa-chart-pie',
        serviceName: 'Data Visualization & Reporting',
        serviceDescription: 'We turn your data into <span class="text-imp">clear, actionable dashboards and reports that drive your decisions.</span>'
    }, 
    {
        serviceIcon: 'fa-gears',
        serviceName: 'Automated Workflows',
        serviceDescription: 'We eliminate repetitive tasks <span class="text-imp">so you can focus on what matters most.</span>'
    },
    {
        serviceIcon: 'fa-network-wired',
        serviceName: 'System Integration',
        serviceDescription: 'Everything we build will <span class="text-imp">align with your technology and security setup.'
    }]
},
{
    serviceCategory: 'Rollout & Support',
    serviceItems: [{
        serviceIcon: 'fa-graduation-cap',
        serviceName: 'Training & Documentation',
        serviceDescription: 'We <span class="text-imp">ensure your team feels confident using the tools we build.</span>'
    }, {
        serviceIcon: 'fa-person-chalkboard',
        serviceName: 'Change Management',
        serviceDescription: 'We <span class="text-imp">help your team understand why the change matters,</span> address concerns early, and build buy-in so the solutions stick. '
    },
    {
        serviceIcon: 'fa-headset',
        serviceName: 'Long Term Support',
        serviceDescription: '<span class="text-imp">You own the solution,</span> but if you want help with upgrades, we\'re always here to support you.'
    }]
}];

var allServicesTemplate = (services) => `
    <div class="services-all">
        ${services.map(serviceCategoryTemplate).join('\n')}
    </div>`;

var serviceCategoryTemplate = (serviceCategory) => `
        <!-- ${serviceCategory.serviceCategory} -->
        <div class="service-category">
            <h3 class="service-category-title">${serviceCategory.serviceCategory}</h3>
            <div class="service-grid">
                ${serviceCategory.serviceItems.map(serviceItemTemplate).join('')}
            </div>
        </div>`;

var serviceItemTemplate = (serviceItem) => `
                <div class="service-item">
                    <div class="service-header">
                        <div class="service-icon">
                            <i class="fa-solid ${serviceItem.serviceIcon}"></i>
                        </div>
                        <h3>${serviceItem.serviceName}</h3>
                    </div>                            
                    <div class="service-content">
                        <p>
                            ${serviceItem.serviceDescription}
                        </p>
                    </div>
                </div>`;

console.log(allServicesTemplate(services));
