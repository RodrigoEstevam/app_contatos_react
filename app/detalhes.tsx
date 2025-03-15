import { View, Text } from "react-native";
import { Contato } from "../services/contatos";
import styles from "../estilos/main";
import React from "react";

const Detalhes: React.FC<Contato> = (contato) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{contato.nome}</Text>
            <Text style={styles.text}>{contato.email}</Text>
            <Text style={styles.text}>{contato.telefone}</Text>
            <Text style={styles.text}>{contato.endereco}</Text>
        </View>
    );
}