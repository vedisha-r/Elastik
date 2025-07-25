import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/Elastik/__docusaurus/debug',
    component: ComponentCreator('/Elastik/__docusaurus/debug', '863'),
    exact: true
  },
  {
    path: '/Elastik/__docusaurus/debug/config',
    component: ComponentCreator('/Elastik/__docusaurus/debug/config', '8e4'),
    exact: true
  },
  {
    path: '/Elastik/__docusaurus/debug/content',
    component: ComponentCreator('/Elastik/__docusaurus/debug/content', 'f5c'),
    exact: true
  },
  {
    path: '/Elastik/__docusaurus/debug/globalData',
    component: ComponentCreator('/Elastik/__docusaurus/debug/globalData', 'acd'),
    exact: true
  },
  {
    path: '/Elastik/__docusaurus/debug/metadata',
    component: ComponentCreator('/Elastik/__docusaurus/debug/metadata', '8bb'),
    exact: true
  },
  {
    path: '/Elastik/__docusaurus/debug/registry',
    component: ComponentCreator('/Elastik/__docusaurus/debug/registry', '34c'),
    exact: true
  },
  {
    path: '/Elastik/__docusaurus/debug/routes',
    component: ComponentCreator('/Elastik/__docusaurus/debug/routes', '0ab'),
    exact: true
  },
  {
    path: '/Elastik/docs',
    component: ComponentCreator('/Elastik/docs', '684'),
    routes: [
      {
        path: '/Elastik/docs',
        component: ComponentCreator('/Elastik/docs', 'a59'),
        routes: [
          {
            path: '/Elastik/docs',
            component: ComponentCreator('/Elastik/docs', '7b7'),
            routes: [
              {
                path: '/Elastik/docs/dependencies/integration-points',
                component: ComponentCreator('/Elastik/docs/dependencies/integration-points', 'b94'),
                exact: true
              },
              {
                path: '/Elastik/docs/dependencies/module-map',
                component: ComponentCreator('/Elastik/docs/dependencies/module-map', '3f3'),
                exact: true
              },
              {
                path: '/Elastik/docs/modules/finance/dependencies',
                component: ComponentCreator('/Elastik/docs/modules/finance/dependencies', '518'),
                exact: true
              },
              {
                path: '/Elastik/docs/modules/finance/overview',
                component: ComponentCreator('/Elastik/docs/modules/finance/overview', 'c49'),
                exact: true
              },
              {
                path: '/Elastik/docs/modules/hr/dependencies',
                component: ComponentCreator('/Elastik/docs/modules/hr/dependencies', '768'),
                exact: true
              },
              {
                path: '/Elastik/docs/modules/hr/overview',
                component: ComponentCreator('/Elastik/docs/modules/hr/overview', '094'),
                exact: true
              },
              {
                path: '/Elastik/docs/modules/inventory/dependencies',
                component: ComponentCreator('/Elastik/docs/modules/inventory/dependencies', '38d'),
                exact: true
              },
              {
                path: '/Elastik/docs/modules/inventory/overview',
                component: ComponentCreator('/Elastik/docs/modules/inventory/overview', 'e28'),
                exact: true
              },
              {
                path: '/Elastik/docs/modules/sales/customer-pricing',
                component: ComponentCreator('/Elastik/docs/modules/sales/customer-pricing', '941'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Elastik/docs/modules/sales/gift-voucher',
                component: ComponentCreator('/Elastik/docs/modules/sales/gift-voucher', '038'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Elastik/docs/modules/sales/online-orders',
                component: ComponentCreator('/Elastik/docs/modules/sales/online-orders', 'd08'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Elastik/docs/modules/sales/sales-consignment',
                component: ComponentCreator('/Elastik/docs/modules/sales/sales-consignment', '025'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Elastik/docs/modules/sales/sales-invoice',
                component: ComponentCreator('/Elastik/docs/modules/sales/sales-invoice', 'b59'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Elastik/docs/modules/sales/sales-order',
                component: ComponentCreator('/Elastik/docs/modules/sales/sales-order', '570'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Elastik/docs/modules/sales/sales-quotation',
                component: ComponentCreator('/Elastik/docs/modules/sales/sales-quotation', '7b6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Elastik/docs/modules/sales/sales-return',
                component: ComponentCreator('/Elastik/docs/modules/sales/sales-return', 'f85'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Elastik/docs/setup/configuration',
                component: ComponentCreator('/Elastik/docs/setup/configuration', '6c1'),
                exact: true
              },
              {
                path: '/Elastik/docs/setup/installation',
                component: ComponentCreator('/Elastik/docs/setup/installation', '789'),
                exact: true
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
