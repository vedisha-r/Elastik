/**
 * Sidebar configuration for elastik-docs
 */

module.exports = {
  tutorialSidebar: [
    // {
    //   type: 'category',
    //   label: 'Dependencies',
    //   items: [
    //     'dependencies/integration-points',
    //     'dependencies/module-map',
    //   ],
    // },
    // {
    //   type: 'category',
    //   label: 'Modules',
    //   items: [
    //     {
    //       type: 'category',
    //       label: 'Finance',
    //       items: [
    //         'modules/finance/overview',
    //         'modules/finance/dependencies',
    //       ],
    //     },
    //     {
    //       type: 'category',
    //       label: 'HR',
    //       items: [
    //         'modules/hr/overview',
    //         'modules/hr/dependencies',
    //       ],
    //     },
    //     {
    //       type: 'category',
    //       label: 'Inventory',
    //       items: [
    //         'modules/inventory/overview',
    //         'modules/inventory/dependencies',
    //       ],
    //     },
        {
          type: 'category',
          label: 'Sales',
          items: [
            'modules/sales/sales-order',
            'modules/sales/sales-quotation',
            'modules/sales/sales-invoice',
            'modules/sales/sales-return',
            'modules/sales/sales-consignment',
            'modules/sales/online-orders',
            'modules/sales/customer-pricing',
            'modules/sales/gift-voucher',
            // 'credit-note',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Setup',
      items: [
        'setup/configuration',
        'setup/installation',
      ],
    }
//   ],
// };
