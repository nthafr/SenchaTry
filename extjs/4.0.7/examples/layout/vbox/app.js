/*

This file is part of Ext JS 4

Copyright (c) 2011 Sencha Inc

Contact:  http://www.sencha.com/contact

GNU General Public License Usage
This file may be used under the terms of the GNU General Public License version 3.0 as published by the Free Software Foundation and appearing in the file LICENSE included in the packaging of this file.  Please review the following information to ensure the GNU General Public License version 3.0 requirements will be met: http://www.gnu.org/copyleft/gpl.html.

If you are unsure which license is appropriate for your use, please contact the sales department at http://www.sencha.com/contact.

*/
Ext.onReady(function () {
    var currentName;
    var replace = function (config, name) {
            var btns = Ext.getCmp('btns');
            if (name && name != currentName) {
                currentName = name;
                btns.remove(0);
                btns.add(Ext.apply(config));
            }
        };

    var viewport = Ext.create('Ext.Viewport', {
        layout: 'border',

        items: [{
            id: 'btns',
            region: 'west',
            baseCls: 'x-plain',
            split: true,
            width: 150,
            minWidth: 100,
            maxWidth: 250,
            layout: 'fit',
            margins: '5 0 5 5',
            items: {
                baseCls: 'x-plain',
                html: '<p style="padding:10px;color:#556677;font-size:11px;">Select a configuration to the right &raquo;</p>'
            }
        }, {
            region: 'center',
            margins: '5 5 5 0',
            layout: 'anchor',
            items: [{
                anchor: '100%',
                baseCls: 'x-plain',
                layout: {
                    type: 'hbox',
                    padding: 10
                },
                defaults: {
                    margins: '0 5 0 0',
                    pressed: false,
                    toggleGroup: 'btns',
                    allowDepress: false
                },
                items: [{
                    xtype: 'button',
                    text: 'Spaced / Align: left',
                    handler: function () {
                        replace({
                            layout: {
                                type: 'vbox',
                                padding: '5',
                                align: 'left'
                            },
                            defaults: {
                                margins: '0 0 5 0'
                            },
                            items: [{
                                xtype: 'button',
                                text: 'Button 1'
                            }, {
                                xtype: 'tbspacer',
                                flex: 1
                            }, {
                                xtype: 'button',
                                text: 'Button 2'
                            }, {
                                xtype: 'button',
                                text: 'Button 3'
                            }, {
                                xtype: 'button',
                                text: 'Button 4',
                                margins: '0'
                            }]
                        }, 'spaced');
                    }
                }, {
                    xtype: 'button',
                    text: 'Multi-Spaced / Align: left',
                    handler: function () {
                        replace({
                            layout: {
                                type: 'vbox',
                                padding: '5',
                                align: 'left'
                            },
                            defaults: {
                                margins: '0 0 5 0'
                            },
                            items: [{
                                xtype: 'button',
                                text: 'Button 1'
                            }, {
                                xtype: 'tbspacer',
                                flex: 1
                            }, {
                                xtype: 'button',
                                text: 'Button 2'
                            }, {
                                xtype: 'tbspacer',
                                flex: 1
                            }, {
                                xtype: 'button',
                                text: 'Button 3'
                            }, {
                                xtype: 'tbspacer',
                                flex: 1
                            }, {
                                xtype: 'button',
                                text: 'Button 4',
                                margins: '0'
                            }]
                        }, 'multi spaced - align left');
                    }
                }, {
                    xtype: 'button',
                    text: 'Align: left',
                    handler: function () {
                        replace({
                            layout: {
                                type: 'vbox',
                                padding: '5',
                                align: 'left'
                            },
                            defaults: {
                                margins: '0 0 5 0'
                            },
                            items: [{
                                xtype: 'button',
                                text: 'Button 1'
                            }, {
                                xtype: 'button',
                                text: 'Button 2'
                            }, {
                                xtype: 'button',
                                text: 'Button 3'
                            }, {
                                xtype: 'button',
                                text: 'Button 4'
                            }]
                        }, 'align left');
                    }
                }, {
                    xtype: 'button',
                    text: 'Align: center',
                    handler: function () {
                        replace({
                            layout: {
                                type: 'vbox',
                                padding: '5',
                                align: 'center'
                            },
                            defaults: {
                                margins: '0 0 5 0'
                            },
                            items: [{
                                xtype: 'button',
                                text: 'Button 1'
                            }, {
                                xtype: 'button',
                                text: 'Button 2'
                            }, {
                                xtype: 'button',
                                text: 'Button 3'
                            }, {
                                xtype: 'button',
                                text: 'Button 4'
                            }]
                        }, 'align center');
                    }
                }, {
                    xtype: 'button',
                    text: 'Align: stretch',
                    handler: function () {
                        replace({
                            layout: {
                                type: 'vbox',
                                padding: '5',
                                align: 'stretch'
                            },
                            defaults: {
                                margins: '0 0 5 0'
                            },
                            items: [{
                                xtype: 'button',
                                text: 'Button 1'
                            }, {
                                xtype: 'button',
                                text: 'Button 2'
                            }, {
                                xtype: 'button',
                                text: 'Button 3'
                            }, {
                                xtype: 'button',
                                text: 'Button 4'
                            }]
                        }, 'align stretch');
                    }
                }, {
                    xtype: 'button',
                    text: 'Align: stretchmax',
                    handler: function () {
                        replace({
                            layout: {
                                type: 'vbox',
                                padding: '5',
                                align: 'stretchmax'
                            },
                            defaults: {
                                margins: '0 0 5 0'
                            },
                            items: [{
                                xtype: 'button',
                                text: 'Jamie'
                            }, {
                                xtype: 'button',
                                text: 'Aaron'
                            }, {
                                xtype: 'button',
                                text: 'Tommy'
                            }, {
                                xtype: 'button',
                                text: 'Ed '
                            }]
                        }, 'align stretchmax');
                    }
                }]
            }, {
                anchor: '100%',
                baseCls: 'x-plain',
                layout: {
                    type: 'hbox',
                    padding: '0 10 10'
                },
                defaults: {
                    margins: '0 5 0 0',
                    pressed: false,
                    toggleGroup: 'btns',
                    allowDepress: false
                },
                items: [{
                    xtype: 'button',
                    text: 'Flex: Even / Align: center',
                    handler: function () {
                        replace({
                            layout: {
                                type: 'vbox',
                                padding: '5',
                                align: 'center'
                            },
                            defaults: {
                                margins: '0 0 5 0'
                            },
                            items: [{
                                xtype: 'button',
                                text: 'Button 1',
                                flex: 1
                            }, {
                                xtype: 'button',
                                text: 'Button 2',
                                flex: 1
                            }, {
                                xtype: 'button',
                                text: 'Button 3',
                                flex: 1
                            }, {
                                xtype: 'button',
                                text: 'Button 4',
                                flex: 1,
                                margins: '0'
                            }]
                        }, 'align flex even');
                    }
                }, {
                    xtype: 'button',
                    text: 'Flex: Ratio / Align: center',
                    handler: function () {
                        replace({
                            layout: {
                                type: 'vbox',
                                padding: '5',
                                align: 'center'
                            },
                            defaults: {
                                margins: '0 0 5 0'
                            },
                            items: [{
                                xtype: 'button',
                                text: 'Button 1',
                                flex: 1
                            }, {
                                xtype: 'button',
                                text: 'Button 2',
                                flex: 1
                            }, {
                                xtype: 'button',
                                text: 'Button 3',
                                flex: 1
                            }, {
                                xtype: 'button',
                                text: 'Button 4',
                                flex: 3,
                                margins: '0'
                            }]
                        }, 'align flex ratio');
                    }
                }, {
                    xtype: 'button',
                    text: 'Flex + Stretch',
                    handler: function () {
                        replace({
                            layout: {
                                type: 'vbox',
                                padding: '5',
                                align: 'stretch'
                            },
                            defaults: {
                                margins: '0 0 5 0'
                            },
                            items: [{
                                xtype: 'button',
                                text: 'Button 1',
                                flex: 1
                            }, {
                                xtype: 'button',
                                text: 'Button 2',
                                flex: 1
                            }, {
                                xtype: 'button',
                                text: 'Button 3',
                                flex: 1
                            }, {
                                xtype: 'button',
                                text: 'Button 4',
                                flex: 3,
                                margins: '0'
                            }]
                        }, 'align flex + stretch');
                    }
                }, {
                    xtype: 'button',
                    text: 'Pack: start / Align: center',
                    handler: function () {
                        replace({
                            layout: {
                                type: 'vbox',
                                padding: '5',
                                pack: 'start',
                                align: 'center'
                            },
                            defaults: {
                                margins: '0 0 5 0'
                            },
                            items: [{
                                xtype: 'button',
                                text: 'Button 1'
                            }, {
                                xtype: 'button',
                                text: 'Button 2'
                            }, {
                                xtype: 'button',
                                text: 'Button 3'
                            }, {
                                xtype: 'button',
                                text: 'Button 4'
                            }]
                        }, 'align pack start + align center');
                    }
                }, {
                    xtype: 'button',
                    text: 'Pack: center / Align: center',
                    handler: function () {
                        replace({
                            layout: {
                                type: 'vbox',
                                padding: '5',
                                pack: 'center',
                                align: 'center'
                            },
                            defaults: {
                                margins: '0 0 5 0'
                            },
                            items: [{
                                xtype: 'button',
                                text: 'Button 1'
                            }, {
                                xtype: 'button',
                                text: 'Button 2'
                            }, {
                                xtype: 'button',
                                text: 'Button 3'
                            }, {
                                xtype: 'button',
                                text: 'Button 4',
                                margins: '0'
                            }]
                        }, 'align pack center + align center');
                    }
                }, {
                    xtype: 'button',
                    text: 'Pack: end / Align: center',
                    handler: function () {
                        replace({
                            layout: {
                                type: 'vbox',
                                padding: '5',
                                pack: 'end',
                                align: 'center'
                            },
                            defaults: {
                                margins: '0 0 5 0'
                            },
                            items: [{
                                xtype: 'button',
                                text: 'Button 1'
                            }, {
                                xtype: 'button',
                                text: 'Button 2'
                            }, {
                                xtype: 'button',
                                text: 'Button 3'
                            }, {
                                xtype: 'button',
                                text: 'Button 4',
                                margins: '0'
                            }]
                        }, 'align pack end + align center');
                    }
                }]
            }]
        }]
    });
});