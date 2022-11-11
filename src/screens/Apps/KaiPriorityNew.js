import * as React from "react";
import { View, Text } from "react-native";

export default function KaiPriorityNewScreen({}) {
  return (
    <View
      style={{
        backgroundColor: "#FFF",
        width: "100%",
        height: "100%",
        alignItems: "center",
        paddingVertical: 20,
        paddingHorizontal: 20,
      }}
    >
      <Text
        style={{
          fontWeight: "bold",
          fontSize: 35,
          color: "#5E5E5E",
          letterSpacing: 0.5,
        }}
      >
        KAI PRIORITY NEW
      </Text>
      <View
        style={{
          height: 1,
          width: "100%",
          backgroundColor: "#337E78",
          marginVertical: 20,
        }}
      ></View>
      <View>
        <Text
          style={{
            textAlign: "justify",
            color: "#5E5E5E",
            letterSpacing: 0.25,
          }}
        >
          Saldo adalah jumlah tagihan yang belum dibayar. Istilah saldo juga
          dikenal di dunia perbankan, di mana saldo merujuk pada uang yang ada
          di dalam rekening. Sedangkan dalam kredit, saldo merujuk pada jumlah
          utang.
        </Text>
        <Text
          style={{
            textAlign: "justify",
            color: "#5E5E5E",
            letterSpacing: 0.25,
            marginVertical: 10,
          }}
        >
          Istilah saldo biasanya sering dihubungkan dengan bank, sebagai Saldo
          Bank. Saldo bank sendiri berarti saldo rekening giro di bank menurut
          Kamus Besar Bahasa Indonesia. Saldo bank juga sering disebut sebagai
          saldo rekening. Menurut Kamus Bank Indonesia, saldo rekening adalah
          jumlah yang ada pada akun setelah pembebanan biaya jasa penarikan,
          pendebitan dan pengkreditan setoran, hasil kliring penarikan cek yang
          dapat digunakan untuk rekonsiliasi dengan membandingkan laporan bank
          dengan buku/register cek; saldo rekening/saldo akun ini dalam
          perkreditan dikenal dengan istilah baki debit; sin. saldo akun
          (account balance).
        </Text>
        <Text
          style={{
            textAlign: "justify",
            color: "#5E5E5E",
            letterSpacing: 0.25,
          }}
        >
          Dalam akuntansi, saldo menunjukkan selisih antara total debit dan
          total kredit yang ada selama satu periode. Jika total debit melebihi
          total kredit, akun tersebut memiliki saldo debit. Sedangkan jika total
          kredit melebihi total debit, akun memiliki saldo kredit. Total debit
          harus sama dengan total kredit saat saldo percobaan ditarik, karena
          kalau berbeda (tidak balance), maka terjadi kesalahan.
        </Text>
      </View>
    </View>
  );
}
