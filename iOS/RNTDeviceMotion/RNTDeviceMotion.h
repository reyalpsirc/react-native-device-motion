//
//  RNTDeviceMotion.h
//  RNTDeviceMotion
//
//  Created by Param Aggarwal on 27/08/15.
//  Copyright © 2015 Facebook. All rights reserved.
//

#import <Foundation/Foundation.h>
#if __has_include(<React/RCTBridgeModule.h>)
  #import <React/RCTBridgeModule.h>
#else
  #import "RCTBridgeModule.h"
#endif

@interface RNTDeviceMotion : NSObject <RCTBridgeModule>

@end
