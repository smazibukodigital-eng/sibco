import React, { useState, useEffect } from 'react';
import { 
  View, Text, ScrollView, TouchableOpacity, TextInput, 
  Modal, Vibration, StyleSheet, Dimensions, Alert
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { FontAwesome5 } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

const { width, height } = Dimensions.get('window');

const generateId = () => Math.random().toString(36).substr(2, 9);

const DEFAULT_STATE = [
  { id: "dailies", title: "Dailies", day: 1, tasks: [
      { id: generateId(), text: "Physical Prep (Train 20 min)", completed: false },
      { id: generateId(), text: "Intel Gathering (Read 20 pages)", completed: false },
      { id: generateId(), text: "Empire Building (Work on agency 30m)", completed: false },
      { id: generateId(), text: "Captain's Log (Write one thing)", completed: false },
      { id: generateId(), text: "Review the Mandate", completed: false }
  ]},
  { id: "fitness", title: "Fitness", day: 1, tasks: [
      { id: generateId(), text: "Master 5 bodyweight movements", completed: false },
      { id: generateId(), text: "Log all food in Cronometer", completed: false },
      { id: generateId(), text: "Hit daily protein target", completed: false }
  ]},
  { id: "agency", title: "Agency", day: 1, tasks: [
      { id: generateId(), text: "Build/Refine 1-page portfolio", completed: false },
      { id: generateId(), text: "Brainstorm Joburg SME niche", completed: false },
      { id: generateId(), text: "Prospect 1 potential local client", completed: false }
  ]}
]; // Shortened for brevity, you can add the rest back!

export default function App() {
  const [missions, setMissions] = useState(DEFAULT_STATE);
  const [config, setConfig] = useState({ dayStarted: false, lastDate: new Date().toDateString(), lastCompletedDate: null });
  const [activeTab, setActiveTab] = useState('dailies');
  const [time, setTime] = useState('');
  
  const [modalVisible, setModalVisible] = useState(false);
  const [modalType, setModalType] = useState(''); // 'end', 'success', 'fail', 'reset'

  useEffect(() => {
    loadData();
    const timer = setInterval(() => {
      const now = new Date();
      setTime(now.toLocaleTimeString('en-US', { hour12: false, hour: '2-digit', minute:'2-digit' }));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const loadData = async () => {
    try {
      const savedMissions = await AsyncStorage.getItem('missions');
      const savedConfig = await AsyncStorage.getItem('config');
      
      if (savedMissions) setMissions(JSON.parse(savedMissions));
      
      let currentConfig = savedConfig ? JSON.parse(savedConfig) : config;
      const today = new Date().toDateString();
      if (currentConfig.lastDate !== today) {
        currentConfig.dayStarted = false;
        currentConfig.lastDate = today;
      }
      setConfig(currentConfig);
    } catch (e) {
      console.log(e);
    }
  };

  const saveData = async (newMissions, newConfig) => {
    try {
      await AsyncStorage.setItem('missions', JSON.stringify(newMissions || missions));
      await AsyncStorage.setItem('config', JSON.stringify(newConfig || config));
    } catch (e) {
      console.log(e);
    }
  };

  const activeMission = missions.find(m => m.id === activeTab);

  const toggleTask = (taskId) => {
    Vibration.vibrate(10);
    const updated = missions.map(m => {
      if (m.id === activeTab) {
        return {
          ...m,
          tasks: m.tasks.map(t => t.id === taskId ? { ...t, completed: !t.completed } : t)
        };
      }
      return m;
    });
    setMissions(updated);
    saveData(updated, config);
  };

  const updateTaskText = (taskId, text) => {
    const updated = missions.map(m => {
      if (m.id === activeTab) {
        return {
          ...m,
          tasks: m.tasks.map(t => t.id === taskId ? { ...t, text } : t)
        };
      }
      return m;
    });
    setMissions(updated);
    saveData(updated, config);
  };

  const addTask = () => {
    const updated = missions.map(m => {
      if (m.id === activeTab) {
        return { ...m, tasks: [...m.tasks, { id: generateId(), text: '', completed: false }] };
      }
      return m;
    });
    setMissions(updated);
    saveData(updated, config);
  };

  const deleteTask = (taskId) => {
    const updated = missions.map(m => {
      if (m.id === activeTab) {
        return { ...m, tasks: m.tasks.filter(t => t.id !== taskId) };
      }
      return m;
    });
    setMissions(updated);
    saveData(updated, config);
  };

  const clockIn = () => {
    Vibration.vibrate(50);
    const newConfig = { ...config, dayStarted: true, lastDate: new Date().toDateString() };
    setConfig(newConfig);
    saveData(missions, newConfig);
  };

  const resumeDay = () => {
    Vibration.vibrate(50);
    const newConfig = { ...config, dayStarted: true, lastCompletedDate: null };
    setConfig(newConfig);
    saveData(missions, newConfig);
  };

  const confirmEndDay = () => {
    let everythingChecked = true;
    const updatedMissions = missions.map(m => {
      const allCompleted = m.tasks.length > 0 && m.tasks.every(t => t.completed);
      if (!allCompleted && m.tasks.length > 0) everythingChecked = false;
      else if (allCompleted) m.day += 1;
      
      return { ...m, tasks: m.tasks.map(t => ({ ...t, completed: false })) };
    });

    setMissions(updatedMissions);
    setModalType(everythingChecked ? 'success' : 'fail');
  };

  const clockOut = () => {
    const newConfig = { ...config, dayStarted: false, lastCompletedDate: new Date().toDateString() };
    setConfig(newConfig);
    saveData(missions, newConfig);
    setModalVisible(false);
  };

  const resetAllDays = () => {
    const updated = missions.map(m => ({
      ...m, day: 1, tasks: m.tasks.map(t => ({...t, completed: false}))
    }));
    setMissions(updated);
    saveData(updated, config);
    setModalVisible(false);
  };

  // Calculations
  let total = 0; let comp = 0;
  missions.forEach(m => m.tasks.forEach(t => { total++; if(t.completed) comp++; }));
  const progressPct = total === 0 ? 0 : Math.round((comp / total) * 100);

  // Overlay Screens
  const todayStr = new Date().toDateString();
  const isCompleted = config.lastCompletedDate === todayStr;
  const isLate = !config.dayStarted && new Date().getHours() >= 10;

  if (isCompleted || !config.dayStarted) {
    return (
      <View style={[styles.container, styles.centerAll]}>
        <FontAwesome5 name={isCompleted ? "bed" : (isLate ? "exclamation-triangle" : "lock")} size={70} color={isCompleted ? "#3b82f6" : (isLate ? "#ef4444" : "#ffffff50")} />
        <Text style={[styles.overlayTitle, isLate && { color: '#ef4444' }, isCompleted && { color: '#3b82f6' }]}>
          {isCompleted ? "REST UP" : (isLate ? "LATE FOR DUTY" : "OFF DUTY")}
        </Text>
        <Text style={styles.overlaySub}>{isCompleted ? "Session complete. See you tomorrow." : "You have not started today's session."}</Text>
        
        <TouchableOpacity onPress={isCompleted ? resumeDay : clockIn} style={{width: '80%'}}>
          <LinearGradient colors={isCompleted ? ['#4b5563', '#374151'] : ['#2563eb', '#9333ea']} style={styles.btnBig}>
            <Text style={styles.btnBigText}>{isCompleted ? "RESUME DAY" : "START DAY"}</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollPad}>
        
        <View style={styles.header}>
          <View>
            <View style={{flexDirection:'row', alignItems:'center'}}>
              <Text style={styles.serverText}>JOHANNESBURG SERVER</Text>
              <TouchableOpacity onPress={() => { setModalType('reset'); setModalVisible(true); }} style={{marginLeft: 10}}>
                <FontAwesome5 name="power-off" size={12} color="#6b7280" />
              </TouchableOpacity>
            </View>
            <Text style={styles.helloText}>Hello{'\n'}Boss</Text>
          </View>
          <View style={styles.clockWrap}>
            <Text style={styles.clockText}>{time}</Text>
          </View>
        </View>

        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.tabsWrap}>
          {missions.map(m => (
            <TouchableOpacity key={m.id} onPress={() => setActiveTab(m.id)}>
              <LinearGradient 
                colors={activeTab === m.id ? ['#3b82f6', '#8b5cf6'] : ['#252528', '#252528']} 
                style={[styles.tab, activeTab !== m.id && {borderWidth: 1, borderColor: '#ffffff10'}]}
              >
                <Text style={[styles.tabText, activeTab !== m.id && {color: '#9ca3af'}]}>{m.title}</Text>
              </LinearGradient>
            </TouchableOpacity>
          ))}
        </ScrollView>

        <View style={styles.progressCard}>
          <Text style={styles.progTitle}>Daily progress</Text>
          <Text style={styles.progSub}>Overall daily task completion.</Text>
          <Text style={styles.progPct}>{progressPct}%</Text>
          <View style={styles.progBarBg}>
            <LinearGradient colors={['#3b82f6', '#8b5cf6']} style={[styles.progBarFill, { width: `${progressPct}%` }]} />
          </View>
        </View>

        <View style={styles.missionHeader}>
          <Text style={styles.missionTitle}>Mission Tasks</Text>
          <View style={styles.dayBadge}>
            <Text style={styles.dayBadgeText}>DAY {activeMission.day}</Text>
          </View>
        </View>

        {activeMission.tasks.map(task => (
          <View key={task.id} style={[styles.taskCard, task.completed && {opacity: 0.6}]}>
            <TouchableOpacity onPress={() => toggleTask(task.id)} style={[styles.checkbox, task.completed && styles.checkboxChecked]}>
              {task.completed && <FontAwesome5 name="check" size={10} color="white" />}
            </TouchableOpacity>
            <TextInput 
              style={[styles.taskInput, task.completed && {textDecorationLine: 'line-through', color: '#6b7280'}]}
              value={task.text}
              onChangeText={(txt) => updateTaskText(task.id, txt)}
              placeholder="Enter objective..."
              placeholderTextColor="#4b5563"
              editable={!task.completed}
            />
            <TouchableOpacity onPress={() => deleteTask(task.id)}>
              <FontAwesome5 name="trash-alt" size={14} color="#6b7280" />
            </TouchableOpacity>
          </View>
        ))}

      </ScrollView>

      <LinearGradient colors={['transparent', '#161618']} style={styles.footer}>
        <View style={styles.footerRow}>
          <TouchableOpacity onPress={addTask} style={styles.btnAdd}>
            <FontAwesome5 name="plus" color="#3b82f6" />
            <Text style={styles.btnAddText}>Add</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => { setModalType('end'); setModalVisible(true); }} style={styles.btnEnd}>
            <LinearGradient colors={['#3b82f6', '#8b5cf6']} style={styles.btnEndGrad}>
              <FontAwesome5 name="moon" color="white" />
              <Text style={styles.btnEndText}>End Day</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </LinearGradient>

      {/* MODALS */}
      <Modal visible={modalVisible} transparent animationType="fade">
        <View style={styles.modalOverlay}>
          <View style={styles.modalBox}>
            
            {modalType === 'end' && (
              <View>
                <Text style={styles.modalTitle}>End the Day?</Text>
                <Text style={styles.modalSub}>Are you sure you want to clock out?</Text>
                <View style={styles.modalRow}>
                  <TouchableOpacity onPress={() => setModalVisible(false)} style={styles.modalBtnCancel}><Text style={styles.modalBtnText}>Cancel</Text></TouchableOpacity>
                  <TouchableOpacity onPress={confirmEndDay} style={styles.modalBtnConfirm}>
                    <LinearGradient colors={['#3b82f6', '#8b5cf6']} style={styles.modalBtnGrad}><Text style={styles.modalBtnText}>Confirm</Text></LinearGradient>
                  </TouchableOpacity>
                </View>
              </View>
            )}

            {modalType === 'success' && (
              <View style={styles.centerAll}>
                <FontAwesome5 name="trophy" size={50} color="#3b82f6" style={{marginBottom: 20}} />
                <Text style={styles.modalTitle}>Mission Passed</Text>
                <Text style={[styles.modalSub, {textAlign:'center', marginBottom: 20}]}>+ RESPECT. Flawless execution today, Boss.</Text>
                <TouchableOpacity onPress={clockOut} style={{width:'100%'}}>
                  <LinearGradient colors={['#2563eb', '#3b82f6']} style={styles.modalBtnGrad}><Text style={styles.modalBtnText}>Clock Out</Text></LinearGradient>
                </TouchableOpacity>
              </View>
            )}

            {modalType === 'fail' && (
              <View style={styles.centerAll}>
                <FontAwesome5 name="skull" size={50} color="#ef4444" style={{marginBottom: 20}} />
                <Text style={[styles.modalTitle, {color: '#ef4444'}]}>Do Better</Text>
                <Text style={[styles.modalSub, {textAlign:'center', marginBottom: 20}]}>Some objectives were incomplete.</Text>
                <TouchableOpacity onPress={clockOut} style={{width:'100%', backgroundColor: '#dc2626', borderRadius: 12, padding: 15, alignItems:'center'}}>
                  <Text style={styles.modalBtnText}>Clock Out</Text>
                </TouchableOpacity>
              </View>
            )}

            {modalType === 'reset' && (
              <View>
                <Text style={[styles.modalTitle, {color: '#ef4444'}]}>Wipe Progress?</Text>
                <Text style={styles.modalSub}>Reset EVERY mission back to Day 1?</Text>
                <View style={styles.modalRow}>
                  <TouchableOpacity onPress={() => setModalVisible(false)} style={styles.modalBtnCancel}><Text style={styles.modalBtnText}>Cancel</Text></TouchableOpacity>
                  <TouchableOpacity onPress={resetAllDays} style={[styles.modalBtnConfirm, {backgroundColor: '#dc2626'}]}><Text style={styles.modalBtnText}>Reset</Text></TouchableOpacity>
                </View>
              </View>
            )}

          </View>
        </View>
      </Modal>

    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#161618' },
  centerAll: { justifyContent: 'center', alignItems: 'center', padding: 20 },
  overlayTitle: { fontSize: 40, fontWeight: '900', color: 'white', marginTop: 20, marginBottom: 5 },
  overlaySub: { color: '#9ca3af', fontSize: 16, marginBottom: 40 },
  btnBig: { padding: 20, borderRadius: 16, alignItems: 'center' },
  btnBigText: { color: 'white', fontWeight: '900', fontSize: 20 },
  
  scrollPad: { padding: 24, paddingBottom: 100, paddingTop: 60 },
  header: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 30 },
  serverText: { color: '#9ca3af', fontSize: 12, fontWeight: '700', letterSpacing: 1 },
  helloText: { color: 'white', fontSize: 36, fontWeight: '900' },
  clockWrap: { backgroundColor: '#3b82f620', paddingHorizontal: 12, paddingVertical: 6, borderRadius: 20, height: 30 },
  clockText: { color: '#60a5fa', fontWeight: 'bold' },
  
  tabsWrap: { marginBottom: 30, flexDirection: 'row' },
  tab: { paddingHorizontal: 20, paddingVertical: 10, borderRadius: 20, marginRight: 10 },
  tabText: { color: 'white', fontWeight: 'bold', fontSize: 14 },
  
  progressCard: { backgroundColor: '#252528', padding: 24, borderRadius: 30, marginBottom: 30 },
  progTitle: { color: 'white', fontSize: 20, fontWeight: 'bold' },
  progSub: { color: '#9ca3af', fontSize: 14, marginBottom: 20, marginTop: 5 },
  progPct: { color: 'white', fontSize: 30, fontWeight: 'bold', marginBottom: 10 },
  progBarBg: { backgroundColor: '#374151', height: 10, borderRadius: 5, width: '100%' },
  progBarFill: { height: 10, borderRadius: 5 },
  
  missionHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 15 },
  missionTitle: { color: 'white', fontSize: 24, fontWeight: 'bold' },
  dayBadge: { backgroundColor: '#252528', paddingHorizontal: 10, paddingVertical: 5, borderRadius: 8, borderWidth: 1, borderColor: '#ffffff10' },
  dayBadgeText: { color: '#8b5cf6', fontWeight: '900', fontSize: 12 },
  
  taskCard: { backgroundColor: '#252528', padding: 15, borderRadius: 16, flexDirection: 'row', alignItems: 'center', marginBottom: 10 },
  checkbox: { width: 24, height: 24, borderRadius: 12, borderWidth: 2, borderColor: '#4b5563', justifyContent: 'center', alignItems: 'center', marginRight: 15 },
  checkboxChecked: { backgroundColor: '#8b5cf6', borderColor: '#8b5cf6' },
  taskInput: { flex: 1, color: 'white', fontSize: 16, marginRight: 10 },
  
  footer: { position: 'absolute', bottom: 0, width: '100%', padding: 20 },
  footerRow: { flexDirection: 'row', gap: 15 },
  btnAdd: { flex: 1, backgroundColor: '#252528', borderRadius: 16, justifyContent: 'center', alignItems: 'center', flexDirection: 'row', height: 56 },
  btnAddText: { color: 'white', fontWeight: 'bold', marginLeft: 8 },
  btnEnd: { flex: 2, borderRadius: 16, overflow: 'hidden', height: 56 },
  btnEndGrad: { flex: 1, justifyContent: 'center', alignItems: 'center', flexDirection: 'row' },
  btnEndText: { color: 'white', fontWeight: 'bold', marginLeft: 8, textTransform: 'uppercase', letterSpacing: 1 },
  
  modalOverlay: { flex: 1, backgroundColor: 'rgba(0,0,0,0.8)', justifyContent: 'center', alignItems: 'center', padding: 20 },
  modalBox: { backgroundColor: '#252528', padding: 24, borderRadius: 24, width: '100%', maxWidth: 350 },
  modalTitle: { color: 'white', fontSize: 24, fontWeight: 'bold', marginBottom: 10 },
  modalSub: { color: '#9ca3af', fontSize: 14, marginBottom: 24 },
  modalRow: { flexDirection: 'row', gap: 10 },
  modalBtnCancel: { flex: 1, backgroundColor: '#374151', padding: 15, borderRadius: 12, alignItems: 'center' },
  modalBtnConfirm: { flex: 1, borderRadius: 12, overflow: 'hidden' },
  modalBtnGrad: { flex: 1, padding: 15, alignItems: 'center', borderRadius: 12 },
  modalBtnText: { color: 'white', fontWeight: 'bold' }
});
