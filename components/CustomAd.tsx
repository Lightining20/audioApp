import React, { useState } from "react";
import { Modal, View, StyleSheet, TouchableOpacity, Text } from "react-native";
import {
  BannerAd,
  BannerAdSize,
  TestIds,
} from "react-native-google-mobile-ads";

const adUnitId = __DEV__
  ? TestIds.BANNER
  : "ca-app-pub-6298877785663646~2737160503";
const BannerModal = ({
  visible,
  onClose,
}: {
  visible: Boolean;
  onClose: () => void;
}) => {
  return (
    <Modal
      transparent={true}
      animationType="slide"
      visible={!!visible}
      onRequestClose={onClose}
    >
      <View style={styles.modalContainer}>
        <View style={styles.adContainer}>
          <BannerAd
            unitId={adUnitId}
            size={BannerAdSize.BANNER}
            requestOptions={{
              requestNonPersonalizedAdsOnly: true,
            }}
            onAdLoaded={() => {
              console.log("Ad loaded successfully");
            }}
            onAdFailedToLoad={(error) => {
              console.error("Ad failed to load", error);
            }}
          />
          <TouchableOpacity onPress={onClose} style={styles.closeButton}>
            <Text style={styles.closeButtonText}>Close</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};
export default BannerModal;

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  adContainer: {
    width: "80%",
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
  },
  closeButton: {
    marginTop: 20,
    padding: 10,
    backgroundColor: "red",
    borderRadius: 5,
  },
  closeButtonText: {
    color: "white",
    fontWeight: "bold",
  },
});
