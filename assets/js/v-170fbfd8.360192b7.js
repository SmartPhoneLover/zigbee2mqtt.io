"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[24368],{5871:(e,t,i)=>{i.r(t),i.d(t,{data:()=>o});const o=JSON.parse('{"key":"v-170fbfd8","path":"/devices/K4003C_L4003C_N4003C_NT4003C.html","title":"BTicino K4003C/L4003C/N4003C/NT4003C control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"BTicino K4003C/L4003C/N4003C/NT4003C control via MQTT","description":"Integrate your BTicino K4003C/L4003C/N4003C/NT4003C via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2020-08-11T22:17:44.000Z"},"excerpt":"","headers":[{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Switch","slug":"switch","link":"#switch","children":[]},{"level":3,"title":"Action (enum)","slug":"action-enum","link":"#action-enum","children":[]},{"level":3,"title":"Led_in_dark (binary)","slug":"led-in-dark-binary","link":"#led-in-dark-binary","children":[]},{"level":3,"title":"Led_if_on (binary)","slug":"led-if-on-binary","link":"#led-if-on-binary","children":[]},{"level":3,"title":"Linkquality (numeric)","slug":"linkquality-numeric","link":"#linkquality-numeric","children":[]}]}],"git":{"updatedTime":1669220177000},"filePathRelative":"devices/K4003C_L4003C_N4003C_NT4003C.md"}')},97548:(e,t,i)=>{i.r(t),i.d(t,{default:()=>p});var o=i(66252);const d=(0,o._)("h1",{id:"bticino-k4003c-l4003c-n4003c-nt4003c",tabindex:"-1"},[(0,o._)("a",{class:"header-anchor",href:"#bticino-k4003c-l4003c-n4003c-nt4003c","aria-hidden":"true"},"#"),(0,o.Uk)(" BTicino K4003C/L4003C/N4003C/NT4003C")],-1),a=(0,o._)("thead",null,[(0,o._)("tr",null,[(0,o._)("th"),(0,o._)("th")])],-1),n=(0,o._)("tr",null,[(0,o._)("td",null,"Model"),(0,o._)("td",null,"K4003C/L4003C/N4003C/NT4003C")],-1),l=(0,o._)("td",null,"Vendor",-1),c=(0,o._)("tr",null,[(0,o._)("td",null,"Description"),(0,o._)("td",null,"Light switch with neutral")],-1),s=(0,o._)("tr",null,[(0,o._)("td",null,"Exposes"),(0,o._)("td",null,"switch (state), action, led_in_dark, led_if_on, linkquality")],-1),r=(0,o._)("tr",null,[(0,o._)("td",null,"Picture"),(0,o._)("td",null,[(0,o._)("img",{src:"https://www.zigbee2mqtt.io/images/devices/K4003C-L4003C-N4003C-NT4003C.jpg",alt:"BTicino K4003C/L4003C/N4003C/NT4003C"})])],-1),u=(0,o.uE)('<h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="switch" tabindex="-1"><a class="header-anchor" href="#switch" aria-hidden="true">#</a> Switch</h3><p>The current state of this switch is in the published state under the <code>state</code> property (value is <code>ON</code> or <code>OFF</code>). To control this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state&quot;: &quot;ON&quot;}</code>, <code>{&quot;state&quot;: &quot;OFF&quot;}</code> or <code>{&quot;state&quot;: &quot;TOGGLE&quot;}</code>. To read the current state of this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;state&quot;: &quot;&quot;}</code>.</p><h3 id="action-enum" tabindex="-1"><a class="header-anchor" href="#action-enum" aria-hidden="true">#</a> Action (enum)</h3><p>Triggered action (e.g. a button click). Value can be found in the published state on the <code>action</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The possible values are: <code>identify</code>, <code>on</code>, <code>off</code>.</p><h3 id="led-in-dark-binary" tabindex="-1"><a class="header-anchor" href="#led-in-dark-binary" aria-hidden="true">#</a> Led_in_dark (binary)</h3><p>Enables the LED when the light is turned off, allowing to see the switch in the dark. Value can be found in the published state on the <code>led_in_dark</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;led_in_dark&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;led_in_dark&quot;: NEW_VALUE}</code>. If value equals <code>ON</code> led_in_dark is ON, if <code>OFF</code> OFF.</p><h3 id="led-if-on-binary" tabindex="-1"><a class="header-anchor" href="#led-if-on-binary" aria-hidden="true">#</a> Led_if_on (binary)</h3><p>Enables the LED when the light is turned on. Value can be found in the published state on the <code>led_if_on</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;led_if_on&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;led_if_on&quot;: NEW_VALUE}</code>. If value equals <code>ON</code> led_if_on is ON, if <code>OFF</code> OFF.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',11),h={},p=(0,i(83744).Z)(h,[["render",function(e,t){const i=(0,o.up)("RouterLink");return(0,o.wg)(),(0,o.iD)("div",null,[(0,o.kq)(" !!!! "),(0,o.kq)(" ATTENTION: This file is auto-generated through docgen! "),(0,o.kq)(' You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". '),(0,o.kq)(' Do not use h1 or h2 heading within "## Notes"-Section. '),(0,o.kq)(" !!!! "),d,(0,o._)("table",null,[a,(0,o._)("tbody",null,[n,(0,o._)("tr",null,[l,(0,o._)("td",null,[(0,o.Wm)(i,{to:"/supported-devices/#v=BTicino"},{default:(0,o.w5)((()=>[(0,o.Uk)("BTicino")])),_:1})])]),c,s,r])]),(0,o.kq)(' Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. '),(0,o.kq)(" Notes END: Do not edit below this line "),u])}]])}}]);