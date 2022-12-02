import { useState } from "react";
import {
  ActivityIndicator,
  Alert,
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

import { auth } from "../firebaseConfig";

import { createUserWithEmailAndPassword } from "firebase/auth";

const Cadastro = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [loading, setLoading] = useState(false);

  const cadastrar = () => {
    if (!email || !senha) {
      Alert.alert(
        "Atenção",
        "Você deve preencher o campos solicitados de e-mail e senha"
      );
      return;
    }

    setLoading(true);

    createUserWithEmailAndPassword(auth, email, senha)
      .then(() => {
        Alert.alert("Cadastra", "Conta criado com sucesso!", [
          {
            text: "Não, quero voltar para o inicio",
            onPress: () => {
              return navigation.navigate("Inicial");
            },
            style: "cancel",
          },
          {
            text: "Sim, quero logar",
            onPress: () => {
              return navigation.navigate("AreaLogada");
            },
            style: "cancel",
          },
        ]);
      })
      .catch((error) => {
        console.log(error);
        let mensagem;
        switch (error.code) {
          case "auth/email-already-in-use":
            mensagem = "E-mail já esta em uso";
            break;

          case "auth/invalid-email":
            mensagem = "E-mail inválido";
            break;

          case "auth/weak-password":
            mensagem = "Senha deve conter minimo 6 digitos";
            break;

          default:
            mensagem = "Houve um erro, tente novamente mais tarde";
            break;
        }
        Alert.alert("Atenção", mensagem);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <View style={estilos.container}>
      <View style={estilos.formulario}>
        <TextInput
          placeholder="E-mail"
          style={estilos.input}
          keyboardType="email-address"
          onChangeText={(valor) => setEmail(valor)}
        />
        <TextInput
          placeholder="Senha"
          style={estilos.input}
          secureTextEntry
          onChangeText={(valor) => setSenha(valor)}
        />
        <View style={estilos.botoes}>
          <Button
            disabled={loading}
            onPress={cadastrar}
            title="Cadastre-se"
            color="blue"
          />
          {loading && <ActivityIndicator size="small" color="#0000ff" />}
        </View>
      </View>
    </View>
  );
};

export default Cadastro;

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "lightblue",
    alignItems: "center",
    justifyContent: "center",
  },
  formulario: {
    marginVertical: 16,
    width: "80%",
  },
  input: {
    backgroundColor: "white",
    marginVertical: 8,
    padding: 8,
    borderRadius: 4,
  },
  botoes: {
    marginVertical: 8,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
