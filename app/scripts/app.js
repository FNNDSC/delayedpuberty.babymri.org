(function (document) {
  'use strict';

  // Grab a reference to our auto-binding template
  // and give it some initial binding values
  // Learn more about auto-binding templates at http://goo.gl/Dx1u2g
  var app = document.querySelector('#fnndscbabymriorg');
  app.logo = 'images/images/logo.png';
  app.label = 'delayedpuberty.babymri.org';
  // 500 100 700
  // 200 100 400
  app.chapters = [
            {id: 'welcome', label: 'Welcome',
            style: {
              primary: {
                normal : {
                  color: '#3F51B5',
                  font: '#ffffff'},
                light : {
                  color: '#C5CAE9',
                  font: '#ffffff'},
                dark : {
                  color: '#303F9F',
                  font: '#ffffff'},
                bw : {
                  color: '#212121',
                  font: '#f9f9f9'},
                wb : {
                  color: '#f9f9f9',
                  font: '#212121'}
                },
              accent: {
                normal : {
                  color: '#E91E63',
                  font: '#ffffff'},
                light : {
                  color: '#F8BBD0',
                  font: '#000000'},
                dark : {
                  color: '#C2185B',
                  font: '#ffffff'},
                bw : {
                  color: '#212121',
                  font: '#f9f9f9'},
                wb : {
                  color: '#f9f9f9',
                  font: '#212121'}
                }
              },
            pages: [
              {id:'home',
              label: 'Home',
              element: 'home-element',
              key: '1hKbn9PvbeRfB5iisCOp4HbKSs43YDqKpJId_xa4SdUw'
            },
            {id:'challenges',
              label: 'Challenges',
              element: 'home-element',
              key: '1IU26ZYZ9pV77m0XyN7V4r__XB-VyBvv_JTWislhpxbw'
            }
            ]},
            {id: 'mri', label: 'Magnetic resonance imaging',
            style: {
              primary: {
                normal : {
                  color: '#E91E63',
                  font: '#ffffff'},
                light : {
                  color: '#F8BBD0',
                  font: '#000000'},
                dark : {
                  color: '#C2185B',
                  font: '#ffffff'},
                bw : {
                  color: '#212121',
                  font: '#f9f9f9'},
                wb : {
                  color: '#f9f9f9',
                  font: '#212121'}
                },
              accent: {
                normal : {
                  color: '#69F0AE',
                  font: '#000000'},
                light : {
                  color: '#B9F6CA',
                  font: '#000000'},
                dark: {
                  color: '#00E676',
                  font: '#ffffff'},
                bw : {
                  color: '#212121',
                  font: '#f9f9f9'},
                wb : {
                  color: '#f9f9f9',
                  font: '#212121'}
                }
              },
            pages: [
              {id:'introduction',
              label: 'Introduction',
              element: 'home-element',
              key: '1RxaYrxI3V-i6r5ntmRkIDwWdAUsY07JLlC3xtCWN6QI'
            },
              {id:'members',
              label: 'Members',
              element: 'members-element',
              key: '10oJMuqpyPOcAwc-zbuFRTsFuukeBuRqhoxs5GsfzCvI'
            },
              {id:'contact',
              label: 'Contact',
              element: 'contact-element',
              key: '1Q5uvG71pt1-3XdX-h-9PXmVpiBhyArI3xhgXcE2AeBY'
            }
            ]},
            {id: 'meg', label: 'Magnetoencephalography',
            style: {
              primary: {
                normal : {
                  color: '#8BC34A',
                  font: '#ffffff'},
                light : {
                  color: '#DCEDC8',
                  font: '#000000'},
                dark : {
                  color: '#689F38',
                  font: '#000000'},
                bw : {
                  color: '#212121',
                  font: '#f9f9f9'},
                wb : {
                  color: '#f9f9f9',
                  font: '#212121'}
                },
              accent: {
                normal : {
                  color: '#E040FB',
                  font: '#ffffff'},
                light : {
                  color: '#EA80FC',
                  font: '#ffffff'},
                dark : {
                  color: '#D500F9',
                  font: '#ffffff'},
                bw : {
                  color: '#212121',
                  font: '#f9f9f9'},
                wb : {
                  color: '#f9f9f9',
                  font: '#212121'}
                }
              },
            pages: [
              {id:'introduction',
              label: 'Introduction',
              element: 'home-element',
              key: '1zLCOyGOGQN96-pNx4v8rIO7U6TRPOm0W-xWNUrbir_Y'
            },
              {id:'members',
              label: 'Members',
              element: 'members-element',
              key: '1JOAYCBEeKta4IjpLkjYVNkcIGa4qfOAlm9DSa1pSjl8'
            },
              {id:'contact',
              label: 'Contact',
              element: 'contact-element',
              key: '1u3ug7AffDoJ3iTS4yPkgj-z1tVZ2nzwbUMmsXs-cuAE'
            }
            ]},
            {id: 'nirs', label: 'Near-infrared spectroscopy',
            style: {
              primary: {
                normal : {
                  color: '#673AB7',
                  font: '#ffffff'},
                light : {
                  color: '#D1C4E9',
                  font: '#000000'},
                dark : {
                  color: '#512DA8',
                  font: '#000000'},
                bw : {
                  color: '#212121',
                  font: '#f9f9f9'},
                wb : {
                  color: '#f9f9f9',
                  font: '#212121'}
                },
              accent: {
                normal : {
                  color: '#FF6E40',
                  font: '#000000'},
                light : {
                  color: '#FF9E80',
                  font: '#000000'},
                dark : {
                  color: '#FF3D00',
                  font: '#ffffff'},
                bw : {
                  color: '#212121',
                  font: '#f9f9f9'},
                wb : {
                  color: '#f9f9f9',
                  font: '#212121'}
                }
              },
            pages: [
              {id:'introduction',
              label: 'Introduction',
              element: 'home-element',
              key: '1lPFJpvI_K7KFshqrRr0VLMkC2VAZpnADYdKtcmSBmHo'
            },
              {id:'members',
              label: 'Members',
              element: 'members-element',
              key: '1MLu-GqDLFRa57nuoL5nVipmymuUl6UcrbSxUBFjQJ-k'
            },
              {id:'contact',
              label: 'Contact',
              element: 'contact-element',
              key: '1T_DytNJsNQlwpJEC1UA7BrUr68TUW5ey0OkrG1C9f4g'
            }
            ]},
            {id: 'softwares', label: 'Softwares',
            style: {
              primary: {
                normal : {
                  color: '#607D8B',
                  font: '#ffffff'},
                light : {
                  color: '#CFD8DC',
                  font: '#000000'},
                dark : {
                  color: '#455A64',
                  font: '#000000'},
                bw : {
                  color: '#212121',
                  font: '#f9f9f9'},
                wb : {
                  color: '#f9f9f9',
                  font: '#212121'}
                },
              accent: {
                normal : {
                  color: '#64FFDA',
                  font: '#000000'},
                light : {
                  color: '#A7FFEB',
                  font: '#000000'},
                dark : {
                  color: '#1DE9B6',
                  font: '#ffffff'},
                bw : {
                  color: '#212121',
                  font: '#f9f9f9'},
                wb : {
                  color: '#f9f9f9',
                  font: '#212121'}
                }
              },
            pages:[
              {id:'introduction',
              label: 'Introduction',
              element: 'home-element',
              key: '1onuLK0M0tdLnuXECcAZkAyFNtgJ2tWMASK_XmFY4FcU'
            },
              {id:'members',
              label: 'Members',
              element: 'members-element',
              key: '1HMeR8bXFmlHpJGiIm6BQR75hKepJLfMx_5aHuZ81BzM'
            },
              {id:'contact',
              label: 'Contact',
              element: 'contact-element',
              key: '1vhW3JmJAcdO8Zg1O2pQLa3L732f6RlgB80GD1Z4MBlk'
            }
            ]},];

  // Listen for template bound event to know when bindings
  // have resolved and content has been stamped to the page
  // app.addEventListener('template-bound', function() {
  //   console.log('Our app is ready to rock!');
  // });

// wrap document so it plays nice with other libraries
// http://www.polymer-project.org/platform/shadow-dom.html#wrappers
})(wrap(document));
