// import React, { useState } from 'react'
// import { Ionicons } from '@expo/vector-icons';
// import { FontAwesome } from '@expo/vector-icons';

// const windowWidth = Dimensions.get('window').width;

// interface InputDefaultProps {
//     placeholder: string,
//     value: string,
//     onChange: (text: string) => void,
//     keyboardType?: 'default' | 'ascii-capable' | 'email-address' | 'numeric' | 'phone-pad' | 'number-pad' | 'decimal-pad' | 'visible-password' | 'web-search';
// }

// interface InputValProps {
//     placeholder: string,
//     value: string,
//     onChange: (text: string) => void,
//     Blur: (e: NativeSyntheticEvent<TextInputFocusEventData>) => void,
//     keyboardType?: 'default' | 'email-address' | 'numeric' | 'phone-pad' | 'number-pad' | 'decimal-pad' | 'visible-password';
// }

// interface InputTouchProps {
//     placeholder: string;
//     value: string;
//     onChangeText?: (text: string) => void; // Cambiado a opcional
//     keyboardType?: 'default' | 'ascii-capable' | 'email-address' | 'numeric' | 'phone-pad' | 'number-pad' | 'decimal-pad' | 'visible-password' | 'web-search';
//     onPress?: () => void;
// }

// const InputDefault = ({ placeholder, value, onChange, keyboardType }) => {

//     return (
//         <View>
//             <TextInput
//                 keyboardType={keyboardType}
//                 style={styles.input}
//                 placeholder={placeholder}
//                 placeholderTextColor={'rgb(180, 180, 180)'}
//                 value={value}
//                 onChangeText={onChange}
//             />
//         </View>
//     )
// }

// const InputPassword = ({ placeholder, value, onChange, keyboardType }) => {

//     const [visible, setVisible] = useState(true);

//     const toggleVisibility = () => {
//         setVisible(!visible);
//     };

//     return (
//         <View style={[styles.password]}>
//             <TextInput
//                 keyboardType={keyboardType}
//                 style={styles.passInput}
//                 placeholder={placeholder}
//                 placeholderTextColor={'rgb(180, 180, 180)'}
//                 secureTextEntry={visible}
//                 value={value}
//                 onChangeText={onChange}
//             />
//             <View style={[styles.passIconContainer]}>
//                 <TouchableOpacity onPress={toggleVisibility}>
//                     <Ionicons style={[styles.passwordIcon]} name={visible ? "eye-off-outline" : "eye-outline"} />
//                 </TouchableOpacity>
//             </View>

//         </View>
//     )
// }

// const InputBlur = ({ placeholder, value, onChange, Blur, keyboardType }) => {

//     return (
//         <View>
//             <TextInput
//                 keyboardType={keyboardType}
//                 style={[styles.input2]}
//                 placeholder={placeholder}
//                 placeholderTextColor={'rgb(180, 180, 180)'}
//                 value={value}
//                 onChangeText={onChange}
//                 onBlur={Blur}
//             />
//         </View>
//     )
// }

// const InputSearch = ({ placeholder, value, onChange, keyboardType }) => {

//     return (
//         <View style={[styles.password]}>
//             <TextInput
//                 keyboardType={keyboardType}
//                 style={styles.input4}
//                 placeholder={placeholder}
//                 placeholderTextColor={'rgb(180, 180, 180)'}
//                 value={value}
//                 onChangeText={onChange}
//                 onKeyPress={({ nativeEvent }) => {
//                     if (nativeEvent.key === 'Exit') {
//                       console.log('Se presionó la tecla Enter');
//                     }
//                   }}
//             />
//             <View style={[styles.searchIconContainer]}>
//                 <TouchableOpacity onPress={() => {}}>
//                     <FontAwesome style={[styles.passwordIcon]} name="search" />
//                 </TouchableOpacity>
//             </View>

//         </View>
//     )
// }

// const InputText = ({ placeholder, value, onChange, keyboardType }) => {

//     const [height, setHeight] = useState(50);

//     const handleContentSizeChange = (e) => {
//       setHeight(e.nativeEvent.contentSize.height);
//     };

//     return (
//         <View> 
//             <TextInput
//                 multiline
//                 style={[styles.input3, { height }]}
//                 placeholder={placeholder}
//                 placeholderTextColor={'rgb(180, 180, 180)'}
//                 value={value}
//                 onChangeText={onChange}
//                 onContentSizeChange={handleContentSizeChange}
//             />
//         </View>
//     )
// }

// const InputBlurUpdate= ({ placeholder, value, onChange, Blur, keyboardType }) => {

//     return (
//         <View>
//             <TextInput
//                 keyboardType={keyboardType}
//                 style={[styles.inputUpdate, {marginBottom: 25}]}
//                 placeholder={placeholder}
//                 placeholderTextColor={'rgb(180, 180, 180)'}
//                 value={value}
//                 onChangeText={onChange}
//                 onBlur={Blur}
//             />
//         </View>
//     )
// }

// const InputUpdate = ({ placeholder, value, onChange, keyboardType }) => {

//     return (
//         <View>
//             <TextInput
//                 keyboardType={keyboardType}
//                 style={[styles.inputUpdate]}
//                 placeholder={placeholder}
//                 placeholderTextColor={'rgb(180, 180, 180)'}
//                 value={value}
//                 onChangeText={onChange}
//             />
//         </View>
//     )
// }

// const InputUpdatePass = ( placeholder, value, onChange, keyboardType ) => {

//     return (
//         <div>
//             <input
//                 keyboardType={keyboardType}
//                 style={[styles.inputUpdate]}
//                 placeholder={placeholder}
//                 secureTextEntry={true}
//                 placeholderTextColor={'rgb(180, 180, 180)'}
//                 value={value}
//                 onChangeText={onChange}
//             />
//         </div>
//     )
// }

// const InputNoEditable = ({ placeholder, value, onChange, keyboardType }) => {

//     return (
//         <View>
//             <TextInput
//                 keyboardType={keyboardType}
//                 style={styles.input}
//                 placeholder={placeholder}
//                 editable={false}
//                 placeholderTextColor={'rgb(180, 180, 180)'}
//                 value={value}
//                 onChangeText={onChange}
//             />
//         </View>
//     )
// }

// const InputTouch = ({ placeholder, value, onChangeText, keyboardType, onPress }) => {
//     return (
//         <View>
//             <TextInput
//                 keyboardType={keyboardType}
//                 style={styles.input}
//                 placeholder={placeholder}
//                 placeholderTextColor={'rgb(180, 180, 180)'}
//                 value={value}
//                 onChangeText={onChangeText}
//                 onPressIn={onPress}
//             />
//         </View>
//     );
// };

// const styles = StyleSheet.create({
//     input: {
//         height: 50,
//         width: '100%',
//         marginTop: 10,
//         marginBottom: 5,
//         fontSize: 15,
//         borderColor: 'rgb(255, 50, 50)',
//         borderWidth: 3,
//         borderRadius: 10,
//         color: 'rgb(250, 250, 250)',
//         paddingHorizontal: 10,
//     },

//     passInput: {
//         height: 50,
//         width: '85%',
//         marginTop: 10,
//         marginBottom: 5,
//         fontSize: 15,
//         borderColor: 'rgb(255, 50, 50)',
//         borderWidth: 3,
//         borderTopLeftRadius: 10,
//         borderBottomLeftRadius: 10,
//         color: 'rgb(250, 250, 250)',
//         paddingHorizontal: 10,
//     },

//     input2: {
//         height: 50,
//         width: '100%',
//         marginTop: 10,
//         fontSize: 15,
//         borderColor: 'rgb(255, 50, 50)',
//         borderWidth: 3,
//         borderRadius: 10,
//         color: 'rgb(250, 250, 250)',
//         paddingHorizontal: 10,
//     },

//     password: {
//         flexDirection: 'row',
//         padding: 0,
//         margin: 0,
//         justifyContent: 'center',
//     },

//     passIconContainer: {
//         height: 50,
//         width: '15%',
//         marginTop: 10,
//         marginBottom: 5,
//         alignItems: 'center',
//         justifyContent: 'center',
//         borderTopWidth: 3,
//         borderRightWidth: 3,
//         borderBottomWidth: 3,
//         borderTopRightRadius: 10,
//         borderBottomRightRadius: 10,
//         borderColor: 'rgb(255, 50, 50)',
//     },

//     passwordIcon: {
//         fontSize: 30,
//         fontWeight: 'bold',
//         color: 'rgb(255, 50, 50)',
//     },

//     input3: {
//         padding: 10,
//         minHeight: 60,
//         width: '100%',
//         marginTop: 10,
//         marginBottom: 20,
//         fontSize: 15,
//         textAlignVertical: 'center',
//         borderColor: 'rgb(255, 50, 50)',
//         borderWidth: 1,
//         borderRadius: 10,
//         color: 'rgb(250, 250, 250)',
//         paddingHorizontal: 10,
//     },

//     input4: {
//         height: 50,
//         width: '85%',
//         marginTop: 10,
//         marginBottom: 5,
//         fontSize: 15,
//         borderColor: 'rgb(255, 50, 50)',
//         borderBottomWidth: 1,
//         color: 'rgb(250, 250, 250)',
//         paddingHorizontal: 10,
//     },

//     searchIconContainer: {
//         minHeight: 50,
//         width: '15%',
//         marginTop: 10,
//         marginBottom: 5,
//         alignItems: 'center',
//         justifyContent: 'center',
//         borderBottomWidth: 1,
//         borderColor: 'rgb(255, 50, 50)',
//     },

//     inputUpdate: {
//         height: 50,
//         width: '100%',
//         marginTop: 0,
//         marginBottom: 5,
//         fontSize: 15,
//         borderColor: 'rgb(255, 50, 50)',
//         borderBottomWidth: 3,
//         borderRadius: 10,
//         color: 'rgb(250, 250, 250)',
//         paddingHorizontal: 10,
//     },
// })

// export { InputDefault, InputPassword, InputBlur, InputText, InputSearch, InputUpdate, InputBlurUpdate, InputUpdatePass, InputNoEditable }

//InputTouch