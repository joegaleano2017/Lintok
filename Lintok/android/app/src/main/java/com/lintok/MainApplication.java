package com.lintok;

import android.app.Application;

import com.facebook.react.ReactApplication;
import com.brentvatne.react.ReactVideoPackage;
import com.oblador.vectoricons.VectorIconsPackage;
import com.horcrux.svg.SvgPackage;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;
import com.facebook.soloader.SoLoader;
import com.imagepicker.ImagePickerPackage;
import com.rt2zz.reactnativecontacts.ReactNativeContacts; 
import com.lwansbrough.RCTCamera.RCTCameraPackage;
import com.oney.WebRTCModule.WebRTCModulePackage;
import com.pilloxa.backgroundjob.BackgroundJobPackage;
import com.zxcpoiu.incallmanager.InCallManagerPackage;

import java.util.Arrays;
import java.util.List;

public class MainApplication extends Application implements ReactApplication {

  private final ReactNativeHost mReactNativeHost = new ReactNativeHost(this) {
    @Override
    public boolean getUseDeveloperSupport() {
      return BuildConfig.DEBUG;
    }

    @Override
    protected List<ReactPackage> getPackages() {
      return Arrays.<ReactPackage>asList(
          new MainReactPackage(),
            new ReactVideoPackage(),
            new VectorIconsPackage(),
            new SvgPackage(),
          new ImagePickerPackage(),
          new ReactNativeContacts() ,
          new RCTCameraPackage(),
          new WebRTCModulePackage(),
          new BackgroundJobPackage(),
          new InCallManagerPackage()
      );
    }
  };

  @Override
  public ReactNativeHost getReactNativeHost() {
    return mReactNativeHost;
  }

  @Override
  public void onCreate() {
    super.onCreate();
    SoLoader.init(this, /* native exopackage */ false);
  }
}
