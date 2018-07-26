;(function() {
  'use strict';

  angular
    .module('sample-app')
    .controller('MainController', MainController);

  MainController.$inject = ['$state', '$scope'];

  function MainController($state, $scope){

    var _this = this;

    $scope.inar = {
      daily : {
          list:[
              { servCat: "IDEN POS",      newAdds: 0,     addOns: 0,      reacts: 0, grossAdds: 0,        deacts: 0,      mig: 0,         net: 0      },
              { servCat: "Nextel POS",    newAdds: 12,    addOns: 133,    reacts: 0, grossAdds: 145,      deacts: 677,    mig: -1157,     net: 1689   },
              { servCat: "Iusacell POS",  newAdds: 3593,  addOns: 17,     reacts: 0, grossAdds: 634,      deacts: 2198,   mig: -15888,    net: -3152  },
              { servCat: "AT&T POS",      newAdds: 16179, addOns: 606,    reacts: 0, grossAdds: 4199,     deacts: 1784,   mig: 3173,      net: 5588   },
              { servCat: "Unefon PRE",    newAdds: 26497, addOns: 0,      reacts: 0, grossAdds: 16179,    deacts: 33247,  mig: 12,        net: -17056 },
              { servCat: "AT&T PRE",      newAdds: 416,   addOns: 0,      reacts: 0, grossAdds: 26379,    deacts: 17249,  mig: -281,      net: 8967   },
              { servCat: "Other",         newAdds: 47331, addOns: 739,    reacts: 0, grossAdds: 416,      deacts: -100,   mig: -159,      net: -357   }
          ],
          total: { servCat: "Total", newAdds: 47331, addOns: 739, reacts: 0, grossAdds: 48070, deacts: 55055, mig: 0, net: -6985 },
          ext: [
              { servCat: "Connected Devices",     newAdds: 1,     addOns: 12,     reacts: 1, grossAdds: 13,   deacts: 0, mig: 0, net: 13 },
              { servCat: "Fixed Wireless POS",    newAdds: 1394,  addOns: 266,    reacts: 0, grossAdds: 1660, deacts: 1, mig: 0, net: 1659 },
              { servCat: "Fixed Wireless PRE",    newAdds: 0,     addOns: 0,      reacts: 0, grossAdds: 0,    deacts: 0, mig: 0, net: 0 },
              { servCat: "Fixed Wireless RES",    newAdds: 0,     addOns: 86,     reacts: 0, grossAdds: 86,   deacts: 0, mig: 0, net: 85 }
          ],
      },
      monthly : {
        list:[
            { servCat: "IDEN POS",      beginUnits: 3,        newAdds: 0,     addOns: 0,      reacts: 1,  grossAdds: 1,       deacts: 1,      mig: 0,       net: 0,       endUnits: 3 },
            { servCat: "Nextel POS",    beginUnits: 1910090,  newAdds: 1492,  addOns: 4114,   reacts: 19, grossAdds: 5625,    deacts: 38847,  mig: -33102,  net: -66324,  endUnits: 1843766 },
            { servCat: "Iusacell POS",  beginUnits: 2426011,  newAdds: 22161, addOns: 17,     reacts: 35, grossAdds: 22213,   deacts: -40420, mig: -78152,  net: -78152,  endUnits: 2347859 },
            { servCat: "AT&T POS",      beginUnits: 1275835,  newAdds: 87814, addOns: 15342,  reacts: 0,  grossAdds: 103156,  deacts: 29981,  mig: 84644,   net: 157819,  endUnits: 1433654 },
            { servCat: "Unefon PRE",    beginUnits: 4848140,  newAdds: 418319,addOns: 0,      reacts: 0,  grossAdds: 418319,  deacts: 326365, mig: 540,     net: 91414,   endUnits: 4939554 },
            { servCat: "AT&T PRE",      beginUnits: 5233551,  newAdds: 505558,addOns: 0,      reacts: 0,  grossAdds: 505558,  deacts: 393811, mig: -6718,   net: 105029,  endUnits: 5338580 },
            { servCat: "Other",         beginUnits: 176251,   newAdds: 7959,  addOns: 4,      reacts: 7,  grossAdds: 7970,    deacts: 4921,   mig: -3867,   net: -818,    endUnits: 175433 }
        ],
        total: { servCat: "Total", beginUnits: 15869881, newAdds: 1043303, addOns: 19477, reacts: 62, grossAdds: 1062842, deacts: 853871, mig: -3, net: 208968, endUnits: 16078849},
        ext: [
          { servCat: "IDEN POS",      beginUnits: 3,        newAdds: 0,     addOns: 0,      reacts: 1,  grossAdds: 1,       deacts: 1,      mig: 0,       net: 0,       endUnits: 3 },
          { servCat: "Nextel POS",    beginUnits: 1910090,  newAdds: 1492,  addOns: 4114,   reacts: 19, grossAdds: 5625,    deacts: 38847,  mig: -33102,  net: -66324,  endUnits: 1843766 },
          { servCat: "Iusacell POS",  beginUnits: 2426011,  newAdds: 22161, addOns: 17,     reacts: 35, grossAdds: 22213,   deacts: -40420, mig: -78152,  net: -78152,  endUnits: 2347859 },
          { servCat: "AT&T POS",      beginUnits: 1275835,  newAdds: 87814, addOns: 15342,  reacts: 0,  grossAdds: 103156,  deacts: 29981,  mig: 84644,   net: 157819,  endUnits: 1433654 }
        ],
    },
    consMonthly : {
      list:[
          { servCat: "IDEN POS",      beginUnits: 3,        newAdds: 0,     addOns: 0,      reacts: 1,  grossAdds: 1,       deacts: 1,      mig: 0,       net: 0,       endUnits: 3 },
          { servCat: "Nextel POS",    beginUnits: 1910090,  newAdds: 1492,  addOns: 4114,   reacts: 19, grossAdds: 5625,    deacts: 38847,  mig: -33102,  net: -66324,  endUnits: 1843766 },
          { servCat: "Iusacell POS",  beginUnits: 2426011,  newAdds: 22161, addOns: 17,     reacts: 35, grossAdds: 22213,   deacts: -40420, mig: -78152,  net: -78152,  endUnits: 2347859 },
          { servCat: "AT&T POS",      beginUnits: 1275835,  newAdds: 87814, addOns: 15342,  reacts: 0,  grossAdds: 103156,  deacts: 29981,  mig: 84644,   net: 157819,  endUnits: 1433654 }
         ],
      total: { servCat: "Total", beginUnits: 15869881, newAdds: 1043303, addOns: 19477, reacts: 62, grossAdds: 1062842, deacts: 853871, mig: -3, net: 208968, endUnits: 16078849},
      internalUse: [
        { company: "Company",   employee: "Employee", demo: "Demo", test: "Test", roaming: "Roaming" },
        { company: "Iusacell",  employee: 28136,      demo: "NI",   test: "NI",   roaming: "NI" },
        { company: "Nextel",    employee: 14057,      demo: 23069,  test: 808,    roaming: 1854 },
        { company: "AT&T",      employee: "NI",       demo: "NI",   test: "NI",   roaming: "NI" }
      ],
      nonComercialBase: [
        { company: "Company",   employee: "Employee", demo: "Demo", test: "Test" },
        { company: "Iusacell",  employee: 3,          demo: 0,      test: 0 },
        { company: "Nextel",    employee: 1910090,    demo: 1492,   test: 4114 },
        { company: "AT&T",      employee: "NI",       demo: "NI",   test: "NI", }
      ],
      churn: 
        { pospago: 2.1,
          prepagoATTTotal: 9.12, 
          other: 5.94,
          prepagoUnefon: 8.4,
          prepago: 8.6,
          ATTTotal: 6.42
        }
  },

  };

  var titles = [
    {of:"May 26, 2018", to:"" },
    {of:"May 01, 2018", to:"May 26, 2018" },
    {of:"May 01, 2018", to:"May 26, 2018" },
  ]

    this.mainOptions = {
      sectionsColor: ['rgb(255,255,255)', 'rgb(255,255,255)', 'rgb(255,255,255)'],
      navigation: true,
      scrollingSpeed: 1000,
      change: (page, next) => {
       

      }
    };

  }

})();
