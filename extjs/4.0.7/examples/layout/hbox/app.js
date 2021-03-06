/*global Ext:false */
/*

This file is part of Ext JS 4

Copyright (c) 2011 Sencha Inc

Contact:  http://www.sencha.com/contact

GNU General Public License Usage
This file may be used under the terms of the GNU General Public License version 3.0 as published by the Free Software Foundation and appearing in the file LICENSE included in the packaging of this file.  Please review the following information to ensure the GNU General Public License version 3.0 requirements will be met: http://www.gnu.org/copyleft/gpl.html.

If you are unsure which license is appropriate for your use, please contact the sales department at http://www.sencha.com/contact.

*/
Ext.onReady(function () {
    var currentName, viewport;
    var replace = function (config, name) {
            var btns = Ext.getCmp('btns');
            if (name && name !== currentName) {
                currentName = name;
                btns.remove(0);
                btns.add(Ext.apply(config));
            }
        };

    viewport = Ext.create('Ext.Viewport', {
        layout: 'border',
        items: [{
            id: 'btns',
            region: 'north',
            baseCls: 'x-plain',
            split: true,
            height: 100,
            minHeight: 75,
            maxHeight: 150,
            layout: 'fit',
            margins: '5 5 0 5',
            items: {
                baseCls: 'x-plain',
                html: '<p style="padding:10px; color:#556677;">Select a configuration below:</p>'
            }
        }, {
            region: 'center',
            margins: '0 5 5 5',
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
                    text: 'Spaced',
                    handler: function () {
                        replace({
                            layout: {
                                type: 'hbox',
                                padding: '5',
                                align: 'top'
                            },
                            defaults: {
                                margins: '0 5 0 0'
                            },
                            items: [{
                                xtype: 'button',
                                text: 'Small Size'
                            }, {
                                xtype: 'tbspacer',
                                flex: 1
                            }, {
                                xtype: 'button',
                                scale: 'medium',
                                text: 'Medium Size'
                            }, {
                                xtype: 'tbspacer',
                                flex: 1
                            }, {
                                xtype: 'button',
                                scale: 'large',
                                text: 'Large Size',
                                margins: '0'
                            }]
                        }, 'spaced');
                    }
                }, {
                    xtype: 'button',
                    text: 'Align: top',
                    handler: function () {
                        replace({
                            layout: {
                                type: 'hbox',
                                padding: '5',
                                align: 'top'
                            },
                            defaults: {
                                margins: '0 5 0 0'
                            },
                            items: [{
                                xtype: 'button',
                                text: 'Small Size'
                            }, {
                                xtype: 'button',
                                scale: 'medium',
                                text: 'Medium Size'
                            }, {
                                xtype: 'button',
                                scale: 'large',
                                text: 'Large Size'
                            }]
                        }, 'align top');
                    }
                }, {
                    xtype: 'button',
                    text: 'Align: middle',
                    handler: function () {
                        replace({
                            layout: {
                                type: 'hbox',
                                padding: '5',
                                align: 'middle'
                            },
                            defaults: {
                                margins: '0 5 0 0'
                            },
                            items: [{
                                xtype: 'button',
                                text: 'Small Size'
                            }, {
                                xtype: 'button',
                                scale: 'medium',
                                text: 'Medium Size'
                            }, {
                                xtype: 'button',
                                scale: 'large',
                                text: 'Large Size'
                            }]
                        }, 'align middle');
                    }
                }, {
                    xtype: 'button',
                    text: 'Align: stretch',
                    handler: function () {
                        replace({
                            layout: {
                                type: 'hbox',
                                padding: '5',
                                align: 'stretch'
                            },
                            defaults: {
                                margins: '0 5 0 0'
                            },
                            items: [{
                                xtype: 'button',
                                text: 'Small Size'
                            }, {
                                xtype: 'button',
                                scale: 'medium',
                                text: 'Medium Size'
                            }, {
                                xtype: 'button',
                                scale: 'large',
                                text: 'Large Size'
                            }]
                        }, 'align stretch');
                    }
                }, {
                    xtype: 'button',
                    text: 'Align: stretchmax',
                    handler: function () {
                        replace({
                            layout: {
                                type: 'hbox',
                                padding: '5',
                                align: 'stretchmax'
                            },
                            defaults: {
                                margins: '0 5 0 0'
                            },
                            items: [{
                                xtype: 'button',
                                text: 'Small Size'
                            }, {
                                xtype: 'button',
                                scale: 'medium',
                                text: 'Medium Size'
                            }, {
                                xtype: 'button',
                                scale: 'large',
                                text: 'Large Size'
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
                    text: 'Flex: All even / Align: middle',
                    handler: function () {
                        replace({
                            layout: {
                                type: 'hbox',
                                padding: '5',
                                align: 'middle'
                            },
                            defaults: {
                                margins: '0 5 0 0'
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
                        }, 'flex all even');
                    }
                }, {
                    xtype: 'button',
                    text: 'Flex: Ratio / Align: top',
                    handler: function () {
                        replace({
                            layout: {
                                type: 'hbox',
                                padding: '5',
                                align: 'top'
                            },
                            defaults: {
                                margins: '0 5 0 0'
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
                        }, 'flex ratio');
                    }
                }, {
                    xtype: 'button',
                    text: 'Pack: start / Align: middle',
                    handler: function () {
                        replace({
                            layout: {
                                type: 'hbox',
                                padding: '5',
                                pack: 'start',
                                align: 'middle'
                            },
                            defaults: {
                                margins: '0 5 0 0'
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
                        }, 'pack start');
                    }
                }, {
                    xtype: 'button',
                    text: 'Pack: center / Align: middle',
                    handler: function () {
                        replace({
                            layout: {
                                type: 'hbox',
                                padding: '5',
                                pack: 'center',
                                align: 'middle'
                            },
                            defaults: {
                                margins: '0 5 0 0'
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
                        }, 'pack center');
                    }
                }, {
                    xtype: 'button',
                    text: 'Pack: end / Align: middle',
                    handler: function () {
                        replace({
                            layout: {
                                type: 'hbox',
                                padding: '5',
                                pack: 'end',
                                align: 'middle'
                            },
                            defaults: {
                                margins: '0 5 0 0'
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
                        }, 'pack end');
                    }
                }]
            }]
        }]
    });
});
