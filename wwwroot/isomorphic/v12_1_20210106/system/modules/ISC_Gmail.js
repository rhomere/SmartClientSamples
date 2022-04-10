/*

  SmartClient Ajax RIA system
  Version v12.1p_2021-01-06/Pro Deployment (2021-01-06)

  Copyright 2000 and beyond Isomorphic Software, Inc. All rights reserved.
  "SmartClient" is a trademark of Isomorphic Software, Inc.

  LICENSE NOTICE
     INSTALLATION OR USE OF THIS SOFTWARE INDICATES YOUR ACCEPTANCE OF THE
     SOFTWARE LICENSE AGREEMENT. If you have received this file without an 
     Isomorphic Software license file, please see:

         http://www.isomorphic.com/licenses/license-sisv.html

     You are not required to accept this agreement, however, nothing else
     grants you the right to copy or use this software. Unauthorized copying
     and use of this software is a violation of international copyright law.

  PROPRIETARY & PROTECTED MATERIAL
     This software contains proprietary materials that are protected by
     contract and intellectual property law. YOU ARE EXPRESSLY PROHIBITED
     FROM ATTEMPTING TO REVERSE ENGINEER THIS SOFTWARE OR MODIFY THIS
     SOFTWARE FOR HUMAN READABILITY.

  CONTACT ISOMORPHIC
     For more information regarding license rights and restrictions, or to
     report possible license violations, please contact Isomorphic Software
     by email (licensing@isomorphic.com) or web (www.isomorphic.com).

*/

if(window.isc&&window.isc.module_Core&&!window.isc.module_Gmail){isc.module_Gmail=1;isc._moduleStart=isc._Gmail_start=(isc.timestamp?isc.timestamp():new Date().getTime());if(isc._moduleEnd&&(!isc.Log||(isc.Log&&isc.Log.logIsDebugEnabled('loadTime')))){isc._pTM={message:'Gmail load/parse time: '+(isc._moduleStart-isc._moduleEnd)+'ms',category:'loadTime'};if(isc.Log&&isc.Log.logDebug)isc.Log.logDebug(isc._pTM.message,'loadTime');else if(isc._preLog)isc._preLog[isc._preLog.length]=isc._pTM;else isc._preLog=[isc._pTM]}isc.definingFramework=true;isc.DataSource.create({componentSchema:true,isServerDS:true,allowAdvancedCriteria:true,progressiveLoading:true,ID:"GmailMessageDS",fields:[{name:"userId",type:"text",validators:[],primaryKey:true},{name:"messageId",type:"text",validators:[],primaryKey:true},{name:"to",type:"text",validators:[]},{name:"from",type:"text",validators:[]},{name:"date",type:"text",validators:[]},{name:"subject",type:"text",validators:[]},{name:"snippet",type:"text",validators:[]},{name:"body",type:"text",validators:[]},{name:"mimeType",type:"text",validators:[]},{name:"hasAttachments",type:"boolean",validators:[]},{name:"q",type:"text",validators:[]}]})
isc.DataSource.create({componentSchema:true,isServerDS:true,allowAdvancedCriteria:true,ID:"GmailAttachmentDS",fields:[{name:"userId",type:"text",validators:[],primaryKey:true},{name:"messageId",type:"text",validators:[],primaryKey:true},{name:"attachmentId",type:"text",validators:[],primaryKey:true},{name:"file",type:"binary",validators:[]}]})
isc._nonDebugModules=(isc._nonDebugModules!=null?isc._nonDebugModules:[]);isc._nonDebugModules.push('Gmail');isc.checkForDebugAndNonDebugModules();isc._moduleEnd=isc._Gmail_end=(isc.timestamp?isc.timestamp():new Date().getTime());if(isc.Log&&isc.Log.logIsInfoEnabled('loadTime'))isc.Log.logInfo('Gmail module init time: '+(isc._moduleEnd-isc._moduleStart)+'ms','loadTime');delete isc.definingFramework;if(isc.Page)isc.Page.handleEvent(null,"moduleLoaded",{moduleName:'Gmail',loadTime:(isc._moduleEnd-isc._moduleStart)});}else{if(window.isc&&isc.Log&&isc.Log.logWarn)isc.Log.logWarn("Duplicate load of module 'Gmail'.");}
