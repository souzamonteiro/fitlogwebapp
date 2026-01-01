// i18n-health.js
// Internationalization system for Comprehensive Health & Fitness Assessment

const I18NHealth = {
    currentLang: 'en',
    
    // Language files
    languages: {
        'en': {
            // === MAIN HEADER ===
            'Comprehensive Health & Fitness Assessment': 'Comprehensive Health & Fitness Assessment',
            'Complete anthropometric, metabolic, and cardiovascular evaluation with personalized prescriptions and history tracking': 'Complete anthropometric, metabolic, and cardiovascular evaluation with personalized prescriptions and history tracking',
            
            // === TAB NAMES ===
            'Body Composition': 'Body Composition',
            'Health Metrics': 'Health Metrics',
            'Fitness Assessment': 'Fitness Assessment',
            'Comprehensive Summary': 'Comprehensive Summary',
            'Exercise Prescription': 'Exercise Prescription',
            'History & Progress': 'History & Progress',
            
            // === BODY COMPOSITION TAB ===
            'Complete Body Composition Analysis': 'Complete Body Composition Analysis',
            'Save Session': 'Save Session',
            'Load Last': 'Load Last',
            'Height (cm)': 'Height (cm)',
            'E.g.: 175': 'E.g.: 175',
            'Weight (kg)': 'Weight (kg)',
            'E.g.: 70': 'E.g.: 70',
            'Age (years)': 'Age (years)',
            'E.g.: 30': 'E.g.: 30',
            'Sex': 'Sex',
            'Male': 'Male',
            'Female': 'Female',
            'Waist Circumference (cm)': 'Waist Circumference (cm)',
            'E.g.: 80': 'E.g.: 80',
            'Measured at navel level': 'Measured at navel level',
            'Hip Circumference (cm)': 'Hip Circumference (cm)',
            'E.g.: 95': 'E.g.: 95',
            'Measured at widest point': 'Measured at widest point',
            'Bone Diameters (for bone mass calculation)': 'Bone Diameters (for bone mass calculation)',
            'Wrist Diameter (cm)': 'Wrist Diameter (cm)',
            'E.g.: 5.2': 'E.g.: 5.2',
            'Knee Diameter (cm)': 'Knee Diameter (cm)',
            'E.g.: 9.5': 'E.g.: 9.5',
            'Skinfolds (Jackson & Pollock - 7 sites)': 'Skinfolds (Jackson & Pollock - 7 sites)',
            'Triceps (mm)': 'Triceps (mm)',
            'Subscapular (mm)': 'Subscapular (mm)',
            'Mid-Axillary (mm)': 'Mid-Axillary (mm)',
            'Pectoral (mm)': 'Pectoral (mm)',
            'Abdominal (mm)': 'Abdominal (mm)',
            'Suprailiac (mm)': 'Suprailiac (mm)',
            'Thigh (mm)': 'Thigh (mm)',
            'Calculate Body Composition': 'Calculate Body Composition',
            'Save & Calculate': 'Save & Calculate',
            'BMI': 'BMI',
            'WHR': 'WHR',
            'Body Fat %': 'Body Fat %',
            'Ideal Weight': 'Ideal Weight',
            '📊 4-Component Body Composition': '📊 4-Component Body Composition',
            'Total Weight': 'Total Weight',
            'Fat Mass': 'Fat Mass',
            'Bone Mass': 'Bone Mass',
            'Muscle Mass': 'Muscle Mass',
            'Residual Weight': 'Residual Weight',
            
            // === HEALTH METRICS TAB ===
            'Health Metrics & Cardiovascular Assessment': 'Health Metrics & Cardiovascular Assessment',
            'Resting Heart Rate (bpm)': 'Resting Heart Rate (bpm)',
            'E.g.: 65': 'E.g.: 65',
            'Systolic BP (mmHg)': 'Systolic BP (mmHg)',
            'E.g.: 120': 'E.g.: 120',
            'Diastolic BP (mmHg)': 'Diastolic BP (mmHg)',
            'E.g.: 80': 'E.g.: 80',
            'Blood Glucose (mg/dL)': 'Blood Glucose (mg/dL)',
            'E.g.: 95': 'E.g.: 95',
            'Total Cholesterol (mg/dL)': 'Total Cholesterol (mg/dL)',
            'E.g.: 180': 'E.g.: 180',
            'Activity Level': 'Activity Level',
            'Sedentary': 'Sedentary',
            'Lightly Active': 'Lightly Active',
            'Moderately Active': 'Moderately Active',
            'Very Active': 'Very Active',
            'Athlete': 'Athlete',
            'Calculate Health Metrics': 'Calculate Health Metrics',
            'BMR (kcal/day)': 'BMR (kcal/day)',
            'VO₂ Max (est.)': 'VO₂ Max (est.)',
            'Blood Pressure': 'Blood Pressure',
            'Cholesterol': 'Cholesterol',
            '🩺 Health Risk Assessment': '🩺 Health Risk Assessment',
            'Cardiovascular Risk:': 'Cardiovascular Risk:',
            'Cholesterol Level:': 'Cholesterol Level:',
            'Blood Glucose:': 'Blood Glucose:',
            'Estimated VO₂ Max:': 'Estimated VO₂ Max:',
            'N/A': 'N/A',
            
            // === FITNESS ASSESSMENT TAB ===
            'Fitness & Aerobic Zone Analysis': 'Fitness & Aerobic Zone Analysis',
            'Strength Assessment': 'Strength Assessment',
            'Bench Press 1RM (kg)': 'Bench Press 1RM (kg)',
            'E.g.: 60': 'E.g.: 60',
            'Squat 1RM (kg)': 'Squat 1RM (kg)',
            'E.g.: 80': 'E.g.: 80',
            'Goal Setting': 'Goal Setting',
            'Primary Goal': 'Primary Goal',
            'Fat Loss': 'Fat Loss',
            'Muscle Gain': 'Muscle Gain',
            'Maintenance': 'Maintenance',
            'Strength': 'Strength',
            'Cardiovascular Health': 'Cardiovascular Health',
            'Analyze Fitness Profile': 'Analyze Fitness Profile',
            'Max Heart Rate': 'Max Heart Rate',
            'Target HR Zone': 'Target HR Zone',
            'TDEE (kcal/day)': 'TDEE (kcal/day)',
            'Strength Ratio': 'Strength Ratio',
            '🎯 Aerobic Training Zones': '🎯 Aerobic Training Zones',
            'Zone': 'Zone',
            'Heart Rate Range': 'Heart Rate Range',
            'Intensity': 'Intensity',
            'Warm-up': 'Warm-up',
            'Fat Burn': 'Fat Burn',
            'Aerobic': 'Aerobic',
            'Anaerobic': 'Anaerobic',
            'Max Effort': 'Max Effort',
            'Very Light': 'Very Light',
            'Light': 'Light',
            'Moderate': 'Moderate',
            'Hard': 'Hard',
            'Maximum': 'Maximum',
            
            // === COMPREHENSIVE SUMMARY TAB ===
            'Comprehensive Health Summary': 'Comprehensive Health Summary',
            'Complete assessment to see results': 'Complete assessment to see results',
            '📊 Body Composition': '📊 Body Composition',
            '🩺 Health Metrics': '🩺 Health Metrics',
            '🎯 Fitness Assessment': '🎯 Fitness Assessment',
            '⚠️ Risk Factors': '⚠️ Risk Factors',
            'Generate Complete Assessment': 'Generate Complete Assessment',
            'No significant risk factors identified': 'No significant risk factors identified',
            
            // === EXERCISE PRESCRIPTION TAB ===
            'Personalized Exercise Prescription': 'Personalized Exercise Prescription',
            'Prescription Parameters': 'Prescription Parameters',
            'Based on data entered in previous tabs. Update those tabs first for accurate prescription.': 'Based on data entered in previous tabs. Update those tabs first for accurate prescription.',
            'Generate Full Prescription': 'Generate Full Prescription',
            'Daily Calories': 'Daily Calories',
            'Timeframe': 'Timeframe',
            'Weekly Target': 'Weekly Target',
            'Health Risk Score': 'Health Risk Score',
            '💓 Cardiovascular Prescription': '💓 Cardiovascular Prescription',
            '🏋️ Strength Prescription': '🏋️ Strength Prescription',
            '💡 Specific Recommendations': '💡 Specific Recommendations',
            'Frequency:': 'Frequency:',
            'Intensity:': 'Intensity:',
            'Duration:': 'Duration:',
            'Type:': 'Type:',
            'Sets/Reps:': 'Sets/Reps:',
            'Rest:': 'Rest:',
            'Maintain calorie deficit of 300-500 kcal/day': 'Maintain calorie deficit of 300-500 kcal/day',
            'Include progressive overload in strength training': 'Include progressive overload in strength training',
            'Prioritize protein intake (1.6-2.2g/kg)': 'Prioritize protein intake (1.6-2.2g/kg)',
            'Calorie surplus of 300-500 kcal/day': 'Calorie surplus of 300-500 kcal/day',
            'Progressive overload focus': 'Progressive overload focus',
            'Prioritize recovery and sleep (7-9 hours)': 'Prioritize recovery and sleep (7-9 hours)',
            'Focus on consistency over intensity': 'Focus on consistency over intensity',
            'Monitor blood pressure during exercise': 'Monitor blood pressure during exercise',
            'Stay hydrated and avoid extreme temperatures': 'Stay hydrated and avoid extreme temperatures',
            'Maintain energy balance': 'Maintain energy balance',
            'Vary stimuli regularly': 'Vary stimuli regularly',
            'Hydrate adequately': 'Hydrate adequately',
            
            // === HISTORY & PROGRESS TAB ===
            'History & Progress Tracking': 'History & Progress Tracking',
            'Refresh': 'Refresh',
            'Save Current Session': 'Save Current Session',
            'Export to CSV': 'Export to CSV',
            'Clear All History': 'Clear All History',
            'All Sessions': 'All Sessions',
            'Last 7 days': 'Last 7 days',
            'Last 30 days': 'Last 30 days',
            'Last 90 days': 'Last 90 days',
            '📈 Progress Charts': '📈 Progress Charts',
            '📊 Session Comparison': '📊 Session Comparison',
            'Weight (kg)': 'Weight (kg)',
            'Body Fat %': 'Body Fat %',
            'Waist-Hip Ratio': 'Waist-Hip Ratio',
            'Resting HR': 'Resting HR',
            '📋 Session History': '📋 Session History',
            'Date': 'Date',
            'Actions': 'Actions',
            'Load': 'Load',
            'Export': 'Export',
            'Delete': 'Delete',
            'Export to JSON': 'Export to JSON',
            'No Assessment History': 'No Assessment History',
            'Go to Body Composition tab, fill your data and click "Save Session"': 'Go to Body Composition tab, fill your data and click "Save Session"',
            'Need at least 2 sessions': 'Need at least 2 sessions',
            'Increase': 'Increase',
            'Decrease': 'Decrease',
            'No change': 'No change',
            
            // === FOOTER ===
            'Comprehensive Health & Fitness Assessment System': 'Comprehensive Health & Fitness Assessment System',
            'View source code on GitHub': 'View source code on GitHub',
            
            // === CLASSIFICATION TEXTS ===
            'Underweight': 'Underweight',
            'Normal': 'Normal',
            'Overweight': 'Overweight',
            'Obesity I': 'Obesity I',
            'Obesity II': 'Obesity II',
            'Obesity III': 'Obesity III',
            'Low risk': 'Low risk',
            'Moderate': 'Moderate',
            'High risk': 'High risk',
            'Elevated': 'Elevated',
            'Stage 1': 'Stage 1',
            'Stage 2': 'Stage 2',
            'Desirable': 'Desirable',
            'Borderline': 'Borderline',
            'High': 'High',
            'Prediabetes': 'Prediabetes',
            'Diabetes': 'Diabetes',
            
            // === ALERT MESSAGES ===
            'Please fill all required fields (highlighted in red)': 'Please fill all required fields (highlighted in red)',
            'No saved sessions found.': 'No saved sessions found.',
            'Loaded session from {0}': 'Loaded session from {0}',
            'Error saving session. Please try again.': 'Error saving session. Please try again.',
            'Error loading session. Please try again.': 'Error loading session. Please try again.',
            'Error deleting session. Please try again.': 'Error deleting session. Please try again.',
            'Are you sure you want to delete this session? This action cannot be undone.': 'Are you sure you want to delete this session? This action cannot be undone.',
            'Are you sure you want to delete ALL saved sessions? This action cannot be undone.': 'Are you sure you want to delete ALL saved sessions? This action cannot be undone.',
            'Session deleted successfully!': 'Session deleted successfully!',
            'All sessions deleted successfully.': 'All sessions deleted successfully.',
            'No sessions to export.': 'No sessions to export.',
            'Error exporting data. Please try again.': 'Error exporting data. Please try again.',
            'Exported {0} sessions to CSV.': 'Exported {0} sessions to CSV.',
            'Exported {0} sessions to JSON.': 'Exported {0} sessions to JSON.',
            'Session exported successfully.': 'Session exported successfully.',
            'Session not found.': 'Session not found.',
            'Error exporting session. Please try again.': 'Error exporting session. Please try again.',
            
            // === NOTIFICATIONS ===
            'Session Saved!': 'Session Saved!',
            'Added to history on {0}': 'Added to history on {0}',
            
            // === SUCCESS/ERROR MESSAGES ===
            'Excellent health profile': 'Excellent health profile',
            'Good health with minor improvements possible': 'Good health with minor improvements possible',
            'Moderate health - some areas need attention': 'Moderate health - some areas need attention',
            'Needs improvement - consider consulting a healthcare provider': 'Needs improvement - consider consulting a healthcare provider',
            
            // === TIME FRAMES ===
            '12-16 weeks': '12-16 weeks',
            '8-12 weeks': '8-12 weeks',
            '6-8 weeks': '6-8 weeks',
            'Ongoing': 'Ongoing',
            
            // === WEEKLY GOALS ===
            '0.5-1.0 kg loss': '0.5-1.0 kg loss',
            '0.2-0.5 kg gain': '0.2-0.5 kg gain',
            '2-5% strength increase': '2-5% strength increase',
            'Maintenance': 'Maintenance',
            
            // === LANGUAGE SELECTOR ===
            'Language:': 'Language:',
            'English': 'English',
            'Portuguese': 'Portuguese',
            'Spanish': 'Spanish',
            
            // === BUTTON TEXTS ===
            'Load this session': 'Load this session',
            'Export this session': 'Export this session',
            'Delete this session': 'Delete this session',
            'Close': 'Close',
            
            // === TABLE HEADERS ===
            'Weight (kg)': 'Weight (kg)',
            'Body Fat %': 'Body Fat %',
            'Rest HR': 'Rest HR',
            'VO₂ Max': 'VO₂ Max'
        },
        
        'pt': {
            // === MAIN HEADER ===
            'Comprehensive Health & Fitness Assessment': 'Avaliação Completa de Saúde e Condicionamento Físico',
            'Complete anthropometric, metabolic, and cardiovascular evaluation with personalized prescriptions and history tracking': 'Avaliação antropométrica, metabólica e cardiovascular completa com prescrições personalizadas e histórico de acompanhamento',
            
            // === TAB NAMES ===
            'Body Composition': 'Composição Corporal',
            'Health Metrics': 'Métricas de Saúde',
            'Fitness Assessment': 'Avaliação de Condicionamento',
            'Comprehensive Summary': 'Resumo Completo',
            'Exercise Prescription': 'Prescrição de Exercícios',
            'History & Progress': 'Histórico e Progresso',
            
            // === BODY COMPOSITION TAB ===
            'Complete Body Composition Analysis': 'Análise Completa da Composição Corporal',
            'Save Session': 'Salvar Sessão',
            'Load Last': 'Carregar Última',
            'Height (cm)': 'Altura (cm)',
            'E.g.: 175': 'Ex.: 175',
            'Weight (kg)': 'Peso (kg)',
            'E.g.: 70': 'Ex.: 70',
            'Age (years)': 'Idade (anos)',
            'E.g.: 30': 'Ex.: 30',
            'Sex': 'Sexo',
            'Male': 'Masculino',
            'Female': 'Feminino',
            'Waist Circumference (cm)': 'Circunferência da Cintura (cm)',
            'E.g.: 80': 'Ex.: 80',
            'Measured at navel level': 'Medida no nível do umbigo',
            'Hip Circumference (cm)': 'Circunferência do Quadril (cm)',
            'E.g.: 95': 'Ex.: 95',
            'Measured at widest point': 'Medida no ponto mais largo',
            'Bone Diameters (for bone mass calculation)': 'Diâmetros Ósseos (para cálculo de massa óssea)',
            'Wrist Diameter (cm)': 'Diâmetro do Punho (cm)',
            'E.g.: 5.2': 'Ex.: 5.2',
            'Knee Diameter (cm)': 'Diâmetro do Joelho (cm)',
            'E.g.: 9.5': 'Ex.: 9.5',
            'Skinfolds (Jackson & Pollock - 7 sites)': 'Dobras Cutâneas (Jackson & Pollock - 7 locais)',
            'Triceps (mm)': 'Tríceps (mm)',
            'Subscapular (mm)': 'Subescapular (mm)',
            'Mid-Axillary (mm)': 'Axilar Média (mm)',
            'Pectoral (mm)': 'Peitoral (mm)',
            'Abdominal (mm)': 'Abdominal (mm)',
            'Suprailiac (mm)': 'Suprailíaca (mm)',
            'Thigh (mm)': 'Coxa (mm)',
            'Calculate Body Composition': 'Calcular Composição Corporal',
            'Save & Calculate': 'Salvar e Calcular',
            'BMI': 'IMC',
            'WHR': 'RCC',
            'Body Fat %': 'Gordura Corporal %',
            'Ideal Weight': 'Peso Ideal',
            '📊 4-Component Body Composition': '📊 Composição Corporal de 4 Componentes',
            'Total Weight': 'Peso Total',
            'Fat Mass': 'Massa Gorda',
            'Bone Mass': 'Massa Óssea',
            'Muscle Mass': 'Massa Muscular',
            'Residual Weight': 'Peso Residual',
            
            // === HEALTH METRICS TAB ===
            'Health Metrics & Cardiovascular Assessment': 'Métricas de Saúde e Avaliação Cardiovascular',
            'Resting Heart Rate (bpm)': 'Frequência Cardíaca de Repouso (bpm)',
            'E.g.: 65': 'Ex.: 65',
            'Systolic BP (mmHg)': 'Pressão Sistólica (mmHg)',
            'E.g.: 120': 'Ex.: 120',
            'Diastolic BP (mmHg)': 'Pressão Diastólica (mmHg)',
            'E.g.: 80': 'Ex.: 80',
            'Blood Glucose (mg/dL)': 'Glicemia (mg/dL)',
            'E.g.: 95': 'Ex.: 95',
            'Total Cholesterol (mg/dL)': 'Colesterol Total (mg/dL)',
            'E.g.: 180': 'Ex.: 180',
            'Activity Level': 'Nível de Atividade',
            'Sedentary': 'Sedentário',
            'Lightly Active': 'Levemente Ativo',
            'Moderately Active': 'Moderadamente Ativo',
            'Very Active': 'Muito Ativo',
            'Athlete': 'Atleta',
            'Calculate Health Metrics': 'Calcular Métricas de Saúde',
            'BMR (kcal/day)': 'TMB (kcal/dia)',
            'VO₂ Max (est.)': 'VO₂ Máx. (est.)',
            'Blood Pressure': 'Pressão Arterial',
            'Cholesterol': 'Colesterol',
            '🩺 Health Risk Assessment': '🩺 Avaliação de Risco de Saúde',
            'Cardiovascular Risk:': 'Risco Cardiovascular:',
            'Cholesterol Level:': 'Nível de Colesterol:',
            'Blood Glucose:': 'Glicemia:',
            'Estimated VO₂ Max:': 'VO₂ Máx. Estimado:',
            'N/A': 'N/A',
            
            // === FITNESS ASSESSMENT TAB ===
            'Fitness & Aerobic Zone Analysis': 'Condicionamento e Análise de Zonas Aeróbicas',
            'Strength Assessment': 'Avaliação de Força',
            'Bench Press 1RM (kg)': 'Supino 1RM (kg)',
            'E.g.: 60': 'Ex.: 60',
            'Squat 1RM (kg)': 'Agachamento 1RM (kg)',
            'E.g.: 80': 'Ex.: 80',
            'Goal Setting': 'Definição de Objetivos',
            'Primary Goal': 'Objetivo Principal',
            'Fat Loss': 'Perda de Gordura',
            'Muscle Gain': 'Ganho de Músculo',
            'Maintenance': 'Manutenção',
            'Strength': 'Força',
            'Cardiovascular Health': 'Saúde Cardiovascular',
            'Analyze Fitness Profile': 'Analisar Perfil de Condicionamento',
            'Max Heart Rate': 'Frequência Cardíaca Máxima',
            'Target HR Zone': 'Zona Alvo de FC',
            'TDEE (kcal/day)': 'GET (kcal/dia)',
            'Strength Ratio': 'Razão de Força',
            '🎯 Aerobic Training Zones': '🎯 Zonas de Treino Aeróbico',
            'Zone': 'Zona',
            'Heart Rate Range': 'Faixa de Frequência Cardíaca',
            'Intensity': 'Intensidade',
            'Warm-up': 'Aquecimento',
            'Fat Burn': 'Queima de Gordura',
            'Aerobic': 'Aeróbico',
            'Anaerobic': 'Anaeróbico',
            'Max Effort': 'Esforço Máximo',
            'Very Light': 'Muito Leve',
            'Light': 'Leve',
            'Moderate': 'Moderada',
            'Hard': 'Difícil',
            'Maximum': 'Máxima',
            
            // === COMPREHENSIVE SUMMARY TAB ===
            'Comprehensive Health Summary': 'Resumo Completo de Saúde',
            'Complete assessment to see results': 'Complete a avaliação para ver os resultados',
            '📊 Body Composition': '📊 Composição Corporal',
            '🩺 Health Metrics': '🩺 Métricas de Saúde',
            '🎯 Fitness Assessment': '🎯 Avaliação de Condicionamento',
            '⚠️ Risk Factors': '⚠️ Fatores de Risco',
            'Generate Complete Assessment': 'Gerar Avaliação Completa',
            'No significant risk factors identified': 'Nenhum fator de risco significativo identificado',
            
            // === EXERCISE PRESCRIPTION TAB ===
            'Personalized Exercise Prescription': 'Prescrição de Exercícios Personalizada',
            'Prescription Parameters': 'Parâmetros da Prescrição',
            'Based on data entered in previous tabs. Update those tabs first for accurate prescription.': 'Baseado nos dados inseridos nas abas anteriores. Atualize essas abas primeiro para uma prescrição precisa.',
            'Generate Full Prescription': 'Gerar Prescrição Completa',
            'Daily Calories': 'Calorias Diárias',
            'Timeframe': 'Período',
            'Weekly Target': 'Meta Semanal',
            'Health Risk Score': 'Pontuação de Risco de Saúde',
            '💓 Cardiovascular Prescription': '💓 Prescrição Cardiovascular',
            '🏋️ Strength Prescription': '🏋️ Prescrição de Força',
            '💡 Specific Recommendations': '💡 Recomendações Específicas',
            'Frequency:': 'Frequência:',
            'Intensity:': 'Intensidade:',
            'Duration:': 'Duração:',
            'Type:': 'Tipo:',
            'Sets/Reps:': 'Séries/Repetições:',
            'Rest:': 'Descanso:',
            'Maintain calorie deficit of 300-500 kcal/day': 'Mantenha déficit calórico de 300-500 kcal/dia',
            'Include progressive overload in strength training': 'Inclua sobrecarga progressiva no treino de força',
            'Prioritize protein intake (1.6-2.2g/kg)': 'Priorize ingestão proteica (1.6-2.2g/kg)',
            'Calorie surplus of 300-500 kcal/day': 'Superávit calórico de 300-500 kcal/dia',
            'Progressive overload focus': 'Foco em sobrecarga progressiva',
            'Prioritize recovery and sleep (7-9 hours)': 'Priorize recuperação e sono (7-9 horas)',
            'Focus on consistency over intensity': 'Foque em consistência ao invés de intensidade',
            'Monitor blood pressure during exercise': 'Monitore a pressão arterial durante o exercício',
            'Stay hydrated and avoid extreme temperatures': 'Mantenha-se hidratado e evite temperaturas extremas',
            'Maintain energy balance': 'Mantenha balanço energético',
            'Vary stimuli regularly': 'Varie estímulos regularmente',
            'Hydrate adequately': 'Hidrate-se adequadamente',
            
            // === HISTORY & PROGRESS TAB ===
            'History & Progress Tracking': 'Acompanhamento de Histórico e Progresso',
            'Refresh': 'Atualizar',
            'Save Current Session': 'Salvar Sessão Atual',
            'Export to CSV': 'Exportar para CSV',
            'Clear All History': 'Limpar Todo Histórico',
            'All Sessions': 'Todas as Sessões',
            'Last 7 days': 'Últimos 7 dias',
            'Last 30 days': 'Últimos 30 dias',
            'Last 90 days': 'Últimos 90 dias',
            '📈 Progress Charts': '📈 Gráficos de Progresso',
            '📊 Session Comparison': '📊 Comparação de Sessões',
            'Weight (kg)': 'Peso (kg)',
            'Body Fat %': 'Gordura Corporal %',
            'Waist-Hip Ratio': 'Relação Cintura-Quadril',
            'Resting HR': 'FC de Repouso',
            '📋 Session History': '📋 Histórico de Sessões',
            'Date': 'Data',
            'Actions': 'Ações',
            'Load': 'Carregar',
            'Export': 'Exportar',
            'Delete': 'Excluir',
            'Export to JSON': 'Exportar para JSON',
            'No Assessment History': 'Sem Histórico de Avaliações',
            'Go to Body Composition tab, fill your data and click "Save Session"': 'Vá para a aba Composição Corporal, preencha seus dados e clique em "Salvar Sessão"',
            'Need at least 2 sessions': 'Necessita pelo menos 2 sessões',
            'Increase': 'Aumento',
            'Decrease': 'Diminuição',
            'No change': 'Sem alteração',
            
            // === FOOTER ===
            'Comprehensive Health & Fitness Assessment System': 'Sistema Completo de Avaliação de Saúde e Condicionamento Físico',
            'View source code on GitHub': 'Ver código-fonte no GitHub',
            
            // === CLASSIFICATION TEXTS ===
            'Underweight': 'Abaixo do peso',
            'Normal': 'Normal',
            'Overweight': 'Sobrepeso',
            'Obesity I': 'Obesidade I',
            'Obesity II': 'Obesidade II',
            'Obesity III': 'Obesidade III',
            'Low risk': 'Baixo risco',
            'Moderate': 'Moderado',
            'High risk': 'Alto risco',
            'Elevated': 'Elevada',
            'Stage 1': 'Estágio 1',
            'Stage 2': 'Estágio 2',
            'Desirable': 'Desejável',
            'Borderline': 'Limítrofe',
            'High': 'Alto',
            'Prediabetes': 'Pré-diabetes',
            'Diabetes': 'Diabetes',
            
            // === ALERT MESSAGES ===
            'Please fill all required fields (highlighted in red)': 'Por favor, preencha todos os campos obrigatórios (destacados em vermelho)',
            'No saved sessions found.': 'Nenhuma sessão salva encontrada.',
            'Loaded session from {0}': 'Sessão carregada de {0}',
            'Error saving session. Please try again.': 'Erro ao salvar sessão. Por favor, tente novamente.',
            'Error loading session. Please try again.': 'Erro ao carregar sessão. Por favor, tente novamente.',
            'Error deleting session. Please try again.': 'Erro ao excluir sessão. Por favor, tente novamente.',
            'Are you sure you want to delete this session? This action cannot be undone.': 'Tem certeza de que deseja excluir esta sessão? Esta ação não pode ser desfeita.',
            'Are you sure you want to delete ALL saved sessions? This action cannot be undone.': 'Tem certeza de que deseja excluir TODAS as sessões salvas? Esta ação não pode ser desfeita.',
            'Session deleted successfully!': 'Sessão excluída com sucesso!',
            'All sessions deleted successfully.': 'Todas as sessões excluídas com sucesso.',
            'No sessions to export.': 'Nenhuma sessão para exportar.',
            'Error exporting data. Please try again.': 'Erro ao exportar dados. Por favor, tente novamente.',
            'Exported {0} sessions to CSV.': '{0} sessões exportadas para CSV.',
            'Exported {0} sessions to JSON.': '{0} sessões exportadas para JSON.',
            'Session exported successfully.': 'Sessão exportada com sucesso.',
            'Session not found.': 'Sessão não encontrada.',
            'Error exporting session. Please try again.': 'Erro ao exportar sessão. Por favor, tente novamente.',
            
            // === NOTIFICATIONS ===
            'Session Saved!': 'Sessão Salva!',
            'Added to history on {0}': 'Adicionada ao histórico em {0}',
            
            // === SUCCESS/ERROR MESSAGES ===
            'Excellent health profile': 'Perfil de saúde excelente',
            'Good health with minor improvements possible': 'Boa saúde com pequenas melhorias possíveis',
            'Moderate health - some areas need attention': 'Saúde moderada - algumas áreas necessitam atenção',
            'Needs improvement - consider consulting a healthcare provider': 'Necessita melhorias - considere consultar um profissional de saúde',
            
            // === TIME FRAMES ===
            '12-16 weeks': '12-16 semanas',
            '8-12 weeks': '8-12 semanas',
            '6-8 weeks': '6-8 semanas',
            'Ongoing': 'Contínuo',
            
            // === WEEKLY GOALS ===
            '0.5-1.0 kg loss': 'Perda de 0,5-1,0 kg',
            '0.2-0.5 kg gain': 'Ganho de 0,2-0,5 kg',
            '2-5% strength increase': 'Aumento de 2-5% na força',
            'Maintenance': 'Manutenção',
            
            // === LANGUAGE SELECTOR ===
            'Language:': 'Idioma:',
            'English': 'Inglês',
            'Portuguese': 'Português',
            'Spanish': 'Espanhol',
            
            // === BUTTON TEXTS ===
            'Load this session': 'Carregar esta sessão',
            'Export this session': 'Exportar esta sessão',
            'Delete this session': 'Excluir esta sessão',
            'Close': 'Fechar',
            
            // === TABLE HEADERS ===
            'Weight (kg)': 'Peso (kg)',
            'Body Fat %': 'Gordura Corporal %',
            'Rest HR': 'FC Repouso',
            'VO₂ Max': 'VO₂ Máx.'
        },
        
        'es': {
            // === MAIN HEADER ===
            'Comprehensive Health & Fitness Assessment': 'Evaluación Integral de Salud y Condición Física',
            'Complete anthropometric, metabolic, and cardiovascular evaluation with personalized prescriptions and history tracking': 'Evaluación antropométrica, metabólica y cardiovascular completa con prescripciones personalizadas y seguimiento de historial',
            
            // === TAB NAMES ===
            'Body Composition': 'Composición Corporal',
            'Health Metrics': 'Métricas de Salud',
            'Fitness Assessment': 'Evaluación de Condición Física',
            'Comprehensive Summary': 'Resumen Integral',
            'Exercise Prescription': 'Prescripción de Ejercicios',
            'History & Progress': 'Historial y Progreso',
            
            // === BODY COMPOSITION TAB ===
            'Complete Body Composition Analysis': 'Análisis Completo de Composición Corporal',
            'Save Session': 'Guardar Sesión',
            'Load Last': 'Cargar Última',
            'Height (cm)': 'Altura (cm)',
            'E.g.: 175': 'Ej.: 175',
            'Weight (kg)': 'Peso (kg)',
            'E.g.: 70': 'Ej.: 70',
            'Age (years)': 'Edad (años)',
            'E.g.: 30': 'Ej.: 30',
            'Sex': 'Sexo',
            'Male': 'Masculino',
            'Female': 'Femenino',
            'Waist Circumference (cm)': 'Circunferencia de Cintura (cm)',
            'E.g.: 80': 'Ej.: 80',
            'Measured at navel level': 'Medida al nivel del ombligo',
            'Hip Circumference (cm)': 'Circunferencia de Cadera (cm)',
            'E.g.: 95': 'Ej.: 95',
            'Measured at widest point': 'Medida en el punto más ancho',
            'Bone Diameters (for bone mass calculation)': 'Diámetros Óseos (para cálculo de masa ósea)',
            'Wrist Diameter (cm)': 'Diámetro de Muñeca (cm)',
            'E.g.: 5.2': 'Ej.: 5.2',
            'Knee Diameter (cm)': 'Diámetro de Rodilla (cm)',
            'E.g.: 9.5': 'Ej.: 9.5',
            'Skinfolds (Jackson & Pollock - 7 sites)': 'Pliegues Cutáneos (Jackson & Pollock - 7 sitios)',
            'Triceps (mm)': 'Tríceps (mm)',
            'Subscapular (mm)': 'Subescapular (mm)',
            'Mid-Axillary (mm)': 'Axilar Media (mm)',
            'Pectoral (mm)': 'Pectoral (mm)',
            'Abdominal (mm)': 'Abdominal (mm)',
            'Suprailiac (mm)': 'Suprailíaco (mm)',
            'Thigh (mm)': 'Muslo (mm)',
            'Calculate Body Composition': 'Calcular Composición Corporal',
            'Save & Calculate': 'Guardar y Calcular',
            'BMI': 'IMC',
            'WHR': 'RCC',
            'Body Fat %': 'Grasa Corporal %',
            'Ideal Weight': 'Peso Ideal',
            '📊 4-Component Body Composition': '📊 Composición Corporal de 4 Componentes',
            'Total Weight': 'Peso Total',
            'Fat Mass': 'Masa Grasa',
            'Bone Mass': 'Masa Ósea',
            'Muscle Mass': 'Masa Muscular',
            'Residual Weight': 'Peso Residual',
            
            // === HEALTH METRICS TAB ===
            'Health Metrics & Cardiovascular Assessment': 'Métricas de Salud y Evaluación Cardiovascular',
            'Resting Heart Rate (bpm)': 'Frecuencia Cardíaca en Reposo (lpm)',
            'E.g.: 65': 'Ej.: 65',
            'Systolic BP (mmHg)': 'Presión Sistólica (mmHg)',
            'E.g.: 120': 'Ej.: 120',
            'Diastolic BP (mmHg)': 'Presión Diastólica (mmHg)',
            'E.g.: 80': 'Ej.: 80',
            'Blood Glucose (mg/dL)': 'Glucosa en Sangre (mg/dL)',
            'E.g.: 95': 'Ej.: 95',
            'Total Cholesterol (mg/dL)': 'Colesterol Total (mg/dL)',
            'E.g.: 180': 'Ej.: 180',
            'Activity Level': 'Nivel de Actividad',
            'Sedentary': 'Sedentario',
            'Lightly Active': 'Ligeramente Activo',
            'Moderately Active': 'Moderadamente Activo',
            'Very Active': 'Muy Activo',
            'Athlete': 'Atleta',
            'Calculate Health Metrics': 'Calcular Métricas de Salud',
            'BMR (kcal/day)': 'TMB (kcal/día)',
            'VO₂ Max (est.)': 'VO₂ Máx. (est.)',
            'Blood Pressure': 'Presión Arterial',
            'Cholesterol': 'Colesterol',
            '🩺 Health Risk Assessment': '🩺 Evaluación de Riesgo de Salud',
            'Cardiovascular Risk:': 'Riesgo Cardiovascular:',
            'Cholesterol Level:': 'Nivel de Colesterol:',
            'Blood Glucose:': 'Glucosa en Sangre:',
            'Estimated VO₂ Max:': 'VO₂ Máx. Estimado:',
            'N/A': 'N/A',
            
            // === FITNESS ASSESSMENT TAB ===
            'Fitness & Aerobic Zone Analysis': 'Condición Física y Análisis de Zonas Aeróbicas',
            'Strength Assessment': 'Evaluación de Fuerza',
            'Bench Press 1RM (kg)': 'Press de Banca 1RM (kg)',
            'E.g.: 60': 'Ej.: 60',
            'Squat 1RM (kg)': 'Sentadilla 1RM (kg)',
            'E.g.: 80': 'Ej.: 80',
            'Goal Setting': 'Establecimiento de Objetivos',
            'Primary Goal': 'Objetivo Principal',
            'Fat Loss': 'Pérdida de Grasa',
            'Muscle Gain': 'Ganancia de Músculo',
            'Maintenance': 'Mantenimiento',
            'Strength': 'Fuerza',
            'Cardiovascular Health': 'Salud Cardiovascular',
            'Analyze Fitness Profile': 'Analizar Perfil de Condición Física',
            'Max Heart Rate': 'Frecuencia Cardíaca Máxima',
            'Target HR Zone': 'Zona Objetivo de FC',
            'TDEE (kcal/day)': 'GET (kcal/día)',
            'Strength Ratio': 'Proporción de Fuerza',
            '🎯 Aerobic Training Zones': '🎯 Zonas de Entrenamiento Aeróbico',
            'Zone': 'Zona',
            'Heart Rate Range': 'Rango de Frecuencia Cardíaca',
            'Intensity': 'Intensidad',
            'Warm-up': 'Calentamiento',
            'Fat Burn': 'Quema de Grasa',
            'Aerobic': 'Aeróbico',
            'Anaerobic': 'Anaeróbico',
            'Max Effort': 'Esfuerzo Máximo',
            'Very Light': 'Muy Ligera',
            'Light': 'Ligera',
            'Moderate': 'Moderada',
            'Hard': 'Difícil',
            'Maximum': 'Máxima',
            
            // === COMPREHENSIVE SUMMARY TAB ===
            'Comprehensive Health Summary': 'Resumen Integral de Salud',
            'Complete assessment to see results': 'Complete la evaluación para ver resultados',
            '📊 Body Composition': '📊 Composición Corporal',
            '🩺 Health Metrics': '🩺 Métricas de Salud',
            '🎯 Fitness Assessment': '🎯 Evaluación de Condición Física',
            '⚠️ Risk Factors': '⚠️ Factores de Riesgo',
            'Generate Complete Assessment': 'Generar Evaluación Completa',
            'No significant risk factors identified': 'No se identificaron factores de riesgo significativos',
            
            // === EXERCISE PRESCRIPTION TAB ===
            'Personalized Exercise Prescription': 'Prescripción de Ejercicios Personalizada',
            'Prescription Parameters': 'Parámetros de Prescripción',
            'Based on data entered in previous tabs. Update those tabs first for accurate prescription.': 'Basado en datos ingresados en pestañas anteriores. Actualice esas pestañas primero para una prescripción precisa.',
            'Generate Full Prescription': 'Generar Prescripción Completa',
            'Daily Calories': 'Calorías Diarias',
            'Timeframe': 'Plazo',
            'Weekly Target': 'Objetivo Semanal',
            'Health Risk Score': 'Puntuación de Riesgo de Salud',
            '💓 Cardiovascular Prescription': '💓 Prescripción Cardiovascular',
            '🏋️ Strength Prescription': '🏋️ Prescripción de Fuerza',
            '💡 Specific Recommendations': '💡 Recomendaciones Específicas',
            'Frequency:': 'Frecuencia:',
            'Intensity:': 'Intensidad:',
            'Duration:': 'Duración:',
            'Type:': 'Tipo:',
            'Sets/Reps:': 'Series/Repeticiones:',
            'Rest:': 'Descanso:',
            'Maintain calorie deficit of 300-500 kcal/day': 'Mantenga déficit calórico de 300-500 kcal/día',
            'Include progressive overload in strength training': 'Incluya sobrecarga progresiva en el entrenamiento de fuerza',
            'Prioritize protein intake (1.6-2.2g/kg)': 'Priorice la ingesta de proteínas (1.6-2.2g/kg)',
            'Calorie surplus of 300-500 kcal/day': 'Superávit calórico de 300-500 kcal/día',
            'Progressive overload focus': 'Enfoque en sobrecarga progresiva',
            'Prioritize recovery and sleep (7-9 hours)': 'Priorice la recuperación y el sueño (7-9 horas)',
            'Focus on consistency over intensity': 'Enfoque en la consistencia sobre la intensidad',
            'Monitor blood pressure during exercise': 'Controle la presión arterial durante el ejercicio',
            'Stay hydrated and avoid extreme temperatures': 'Manténgase hidratado y evite temperaturas extremas',
            'Maintain energy balance': 'Mantenga el equilibrio energético',
            'Vary stimuli regularly': 'Varíe estímulos regularmente',
            'Hydrate adequately': 'Hidrátese adecuadamente',
            
            // === HISTORY & PROGRESS TAB ===
            'History & Progress Tracking': 'Seguimiento de Historial y Progreso',
            'Refresh': 'Actualizar',
            'Save Current Session': 'Guardar Sesión Actual',
            'Export to CSV': 'Exportar a CSV',
            'Clear All History': 'Borrar Todo el Historial',
            'All Sessions': 'Todas las Sesiones',
            'Last 7 days': 'Últimos 7 días',
            'Last 30 days': 'Últimos 30 días',
            'Last 90 days': 'Últimos 90 días',
            '📈 Progress Charts': '📈 Gráficos de Progreso',
            '📊 Session Comparison': '📊 Comparación de Sesiones',
            'Weight (kg)': 'Peso (kg)',
            'Body Fat %': 'Grasa Corporal %',
            'Waist-Hip Ratio': 'Proporción Cintura-Cadera',
            'Resting HR': 'FC en Reposo',
            '📋 Session History': '📋 Historial de Sesiones',
            'Date': 'Fecha',
            'Actions': 'Acciones',
            'Load': 'Cargar',
            'Export': 'Exportar',
            'Delete': 'Eliminar',
            'Export to JSON': 'Exportar a JSON',
            'No Assessment History': 'Sin Historial de Evaluaciones',
            'Go to Body Composition tab, fill your data and click "Save Session"': 'Vaya a la pestaña Composición Corporal, complete sus datos y haga clic en "Guardar Sesión"',
            'Need at least 2 sessions': 'Se necesitan al menos 2 sesiones',
            'Increase': 'Aumento',
            'Decrease': 'Disminución',
            'No change': 'Sin cambio',
            
            // === FOOTER ===
            'Comprehensive Health & Fitness Assessment System': 'Sistema Integral de Evaluación de Salud y Condición Física',
            'View source code on GitHub': 'Ver código fuente en GitHub',
            
            // === CLASSIFICATION TEXTS ===
            'Underweight': 'Bajo peso',
            'Normal': 'Normal',
            'Overweight': 'Sobrepeso',
            'Obesity I': 'Obesidad I',
            'Obesity II': 'Obesidad II',
            'Obesity III': 'Obesidad III',
            'Low risk': 'Bajo riesgo',
            'Moderate': 'Moderado',
            'High risk': 'Alto riesgo',
            'Elevated': 'Elevada',
            'Stage 1': 'Etapa 1',
            'Stage 2': 'Etapa 2',
            'Desirable': 'Deseable',
            'Borderline': 'Límite',
            'High': 'Alto',
            'Prediabetes': 'Prediabetes',
            'Diabetes': 'Diabetes',
            
            // === ALERT MESSAGES ===
            'Please fill all required fields (highlighted in red)': 'Por favor, complete todos los campos obligatorios (resaltados en rojo)',
            'No saved sessions found.': 'No se encontraron sesiones guardadas.',
            'Loaded session from {0}': 'Sesión cargada desde {0}',
            'Error saving session. Please try again.': 'Error al guardar la sesión. Por favor, intente nuevamente.',
            'Error loading session. Please try again.': 'Error al cargar la sesión. Por favor, intente nuevamente.',
            'Error deleting session. Please try again.': 'Error al eliminar la sesión. Por favor, intente nuevamente.',
            'Are you sure you want to delete this session? This action cannot be undone.': '¿Está seguro de que desea eliminar esta sesión? Esta acción no se puede deshacer.',
            'Are you sure you want to delete ALL saved sessions? This action cannot be undone.': '¿Está seguro de que desea eliminar TODAS las sesiones guardadas? Esta acción no se puede deshacer.',
            'Session deleted successfully!': '¡Sesión eliminada con éxito!',
            'All sessions deleted successfully.': 'Todas las sesiones eliminadas con éxito.',
            'No sessions to export.': 'No hay sesiones para exportar.',
            'Error exporting data. Please try again.': 'Error al exportar datos. Por favor, intente nuevamente.',
            'Exported {0} sessions to CSV.': '{0} sesiones exportadas a CSV.',
            'Exported {0} sessions to JSON.': '{0} sesiones exportadas a JSON.',
            'Session exported successfully.': 'Sesión exportada con éxito.',
            'Session not found.': 'Sesión no encontrada.',
            'Error exporting session. Please try again.': 'Error al exportar la sesión. Por favor, intente nuevamente.',
            
            // === NOTIFICATIONS ===
            'Session Saved!': '¡Sesión Guardada!',
            'Added to history on {0}': 'Agregada al historial el {0}',
            
            // === SUCCESS/ERROR MESSAGES ===
            'Excellent health profile': 'Perfil de salud excelente',
            'Good health with minor improvements possible': 'Buena salud con mejoras menores posibles',
            'Moderate health - some areas need attention': 'Salud moderada - algunas áreas necesitan atención',
            'Needs improvement - consider consulting a healthcare provider': 'Necesita mejoras - considere consultar a un profesional de la salud',
            
            // === TIME FRAMES ===
            '12-16 weeks': '12-16 semanas',
            '8-12 weeks': '8-12 semanas',
            '6-8 weeks': '6-8 semanas',
            'Ongoing': 'Continuo',
            
            // === WEEKLY GOALS ===
            '0.5-1.0 kg loss': 'Pérdida de 0,5-1,0 kg',
            '0.2-0.5 kg gain': 'Ganancia de 0,2-0,5 kg',
            '2-5% strength increase': 'Aumento de fuerza del 2-5%',
            'Maintenance': 'Mantenimiento',
            
            // === LANGUAGE SELECTOR ===
            'Language:': 'Idioma:',
            'English': 'Inglés',
            'Portuguese': 'Portugués',
            'Spanish': 'Español',
            
            // === BUTTON TEXTS ===
            'Load this session': 'Cargar esta sesión',
            'Export this session': 'Exportar esta sesión',
            'Delete this session': 'Eliminar esta sesión',
            'Close': 'Cerrar',
            
            // === TABLE HEADERS ===
            'Weight (kg)': 'Peso (kg)',
            'Body Fat %': 'Grasa Corporal %',
            'Rest HR': 'FC Reposo',
            'VO₂ Max': 'VO₂ Máx.'
        }
    },
    
    // Initialize
    init() {
        // Get saved language
        const savedLang = localStorage.getItem('healthAppLang');
        
        // Get browser language (e.g., "pt-BR", "en-US")
        const browserLang = (navigator.language || navigator.userLanguage || 'en').toLowerCase();
        const browserLangCode = browserLang.substring(0, 2);
        
        // Supported languages in our app
        const supportedLangs = {
            'en': 'English',
            'pt': 'Português',
            'es': 'Español'
        };
        
        // Language detection with fallbacks
        let detectedLang;
        
        // 1. Check saved preference
        if (savedLang && supportedLangs[savedLang]) {
            detectedLang = savedLang;
        } 
        // 2. Check browser language directly
        else if (supportedLangs[browserLangCode]) {
            detectedLang = browserLangCode;
        }
        // 3. Check for regional variants
        else {
            // Map regional variants to supported languages
            const regionalMap = {
                // Portuguese variants
                'pt-br': 'pt', 'pt-pt': 'pt', 'pt': 'pt',
                // Spanish variants
                'es-es': 'es', 'es-mx': 'es', 'es-ar': 'es', 'es': 'es',
                // English variants (default fallback)
                'en-us': 'en', 'en-gb': 'en', 'en-au': 'en', 'en': 'en'
            };
            
            detectedLang = regionalMap[browserLang] || 'en';
        }
        
        this.currentLang = detectedLang;
        
        // Save if not English and not already saved
        if (this.currentLang !== 'en' && !savedLang) {
            localStorage.setItem('healthAppLang', this.currentLang);
        }
        
        // Apply translations
        this.applyTranslations();
        
        // Create language selector
        this.createLanguageSelector();
        
        // Override alert and confirm
        this.overrideDialogs();
        
        // Translates the dynamic content
        this.updateDynamicContent();
        
        console.log(`I18N Health: Language set to ${this.currentLang} (${supportedLangs[this.currentLang]})`);
    },
    
    // Create language selector UI
    createLanguageSelector() {
        // Don't create if already exists
        if (document.getElementById('languageSelect')) return;
        
        // Get current translation for "Language:"
        const currentLabel = this.t('Language:');
        
        // Language names in their own language
        const languageNames = {
            'en': 'English',
            'pt': 'Português',
            'es': 'Español'
        };
        
        let optionsHTML = '';
        for (const [code, name] of Object.entries(languageNames)) {
            const selected = code === this.currentLang ? ' selected' : '';
            optionsHTML += `<option value="${code}"${selected}>${name}</option>`;
        }
        
        const selectorHTML = `
            <div style="
                position: fixed;
                top: 20px;
                right: 20px;
                z-index: 1000;
                background: rgba(255, 255, 255, 0.95);
                padding: 10px 15px;
                border-radius: 10px;
                box-shadow: 0 2px 10px rgba(0,0,0,0.1);
                display: flex;
                align-items: center;
                gap: 10px;
            ">
                <label for="languageSelect" style="
                    font-weight: 500;
                    color: #333;
                    font-size: 14px;
                ">
                    ${currentLabel}
                </label>
                <select id="languageSelect" style="
                    padding: 6px 10px;
                    border-radius: 6px;
                    border: 1px solid #007aff;
                    background: white;
                    color: #333;
                    font-size: 14px;
                    cursor: pointer;
                ">
                    ${optionsHTML}
                </select>
            </div>
        `;
        
        // Insert at the beginning of body
        document.body.insertAdjacentHTML('afterbegin', selectorHTML);
        
        // Add change event
        document.getElementById('languageSelect').addEventListener('change', (e) => {
            this.changeLanguage(e.target.value);
        });
    },
    
    // Change language - reloads the page
    changeLanguage(lang) {
        if (!this.languages[lang]) {
            console.warn(`Language not supported: ${lang}`);
            return;
        }
        
        // Save preference
        localStorage.setItem('healthAppLang', lang);
        
        // Show loading message
        const notification = document.createElement('div');
        notification.innerHTML = `
            <div style="
                position: fixed;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                background: #007aff;
                color: white;
                padding: 20px 30px;
                border-radius: 10px;
                box-shadow: 0 4px 15px rgba(0,0,0,0.2);
                z-index: 9999;
                text-align: center;
            ">
                <div style="margin-bottom: 10px;">
                    <i class="fas fa-sync-alt fa-spin" style="font-size: 24px;"></i>
                </div>
                <div>Changing language...</div>
            </div>
        `;
        
        document.body.appendChild(notification);
        
        // Reload the page to apply all changes
        setTimeout(() => {
            window.location.reload();
        }, 500);
    },
    
    // Apply translations to static content
    applyTranslations() {
        const translations = this.languages[this.currentLang];
        if (!translations) return;
        
        // Get all text content in the document
        const allElements = document.querySelectorAll('body *:not(script):not(style)');
        
        // Translate static text content
        allElements.forEach(element => {
            // Skip elements with specific classes that might contain dynamic content
            if (element.classList.contains('result-value') || 
                element.classList.contains('result-label') ||
                element.classList.contains('metric-value') ||
                element.classList.contains('comparison-value') ||
                element.id && (
                    element.id.includes('result') ||
                    element.id.includes('comp') ||
                    element.id.includes('summary') ||
                    element.id.includes('comparison') ||
                    element.id.includes('zone') ||
                    element.id.includes('prescription')
                )) {
                return;
            }
            
            // Translate text content
            if (element.childNodes.length === 1 && element.childNodes[0].nodeType === Node.TEXT_NODE) {
                const originalText = element.textContent.trim();
                if (originalText && translations[originalText]) {
                    element.textContent = translations[originalText];
                }
            } else {
                // Check child text nodes
                element.childNodes.forEach(child => {
                    if (child.nodeType === Node.TEXT_NODE && child.textContent.trim()) {
                        const originalText = child.textContent.trim();
                        if (translations[originalText]) {
                            child.textContent = child.textContent.replace(originalText, translations[originalText]);
                        }
                    }
                });
            }
        });
        
        // Translate placeholders
        document.querySelectorAll('[placeholder]').forEach(element => {
            const placeholder = element.getAttribute('placeholder');
            const translation = translations[placeholder];
            
            if (translation) {
                element.setAttribute('placeholder', translation);
            }
        });
        
        // Translate button values and text
        document.querySelectorAll('button, input[type="button"], input[type="submit"]').forEach(element => {
            const text = element.textContent || element.value || '';
            const trimmedText = text.trim();
            
            if (trimmedText && translations[trimmedText]) {
                if (element.textContent) {
                    element.textContent = translations[trimmedText];
                } else if (element.value) {
                    element.value = translations[trimmedText];
                }
            }
            
            // Translate title attributes
            const title = element.getAttribute('title');
            if (title && translations[title]) {
                element.setAttribute('title', translations[title]);
            }
        });
        
        // Translate select options
        document.querySelectorAll('select option').forEach(option => {
            const text = option.textContent.trim();
            if (text && translations[text]) {
                option.textContent = translations[text];
            }
        });
        
        // Translate table headers
        document.querySelectorAll('th').forEach(th => {
            const text = th.textContent.trim();
            if (text && translations[text]) {
                th.textContent = translations[text];
            }
        });
        
        // Translate labels
        document.querySelectorAll('label').forEach(label => {
            const text = label.textContent.trim();
            if (text && translations[text]) {
                label.textContent = translations[text];
            }
        });
        
        // Translate the footer
        const footerTexts = document.querySelectorAll('footer p');
        footerTexts.forEach(p => {
            const text = p.textContent.trim();
            if (text && translations[text]) {
                p.textContent = translations[text];
            }
        });
        
        // Translate links in footer
        const footerLinks = document.querySelectorAll('footer a');
        footerLinks.forEach(link => {
            const text = link.textContent.trim();
            if (text && translations[text]) {
                link.textContent = translations[text];
            }
        });
        
        // Update tooltips in history table
        setTimeout(() => {
            this.updateDynamicContent();
        }, 100);
    },
    
    // Get translation (for JavaScript use)
    t(key, ...params) {
        const translations = this.languages[this.currentLang] || this.languages.en;
        let translation = translations[key] || key;
        
        // Replace parameters {0}, {1}, etc.
        if (params && params.length > 0) {
            params.forEach((param, index) => {
                const placeholder = `{${index}}`;
                while (translation.includes(placeholder)) {
                    translation = translation.replace(placeholder, param);
                }
            });
        }
        
        return translation;
    },
    
    // Override alert and confirm
    overrideDialogs() {
        const originalAlert = window.alert;
        const originalConfirm = window.confirm;
        
        window.alert = (message) => {
            return originalAlert(this.t(message));
        };
        
        window.confirm = (message) => {
            return originalConfirm(this.t(message));
        };
    },
    
    // Update dynamic content (called after page loads)
    updateDynamicContent() {
        // Update classification texts that might be dynamically generated
        document.querySelectorAll('.classification').forEach(element => {
            const text = element.textContent.trim();
            if (text && this.languages[this.currentLang] && this.languages[this.currentLang][text]) {
                element.textContent = this.languages[this.currentLang][text];
            }
        });
        
        // Update any dynamically generated buttons in history table
        document.querySelectorAll('[title="Load"], [title="Export"], [title="Delete"]').forEach(button => {
            const title = button.getAttribute('title');
            if (title && this.languages[this.currentLang] && this.languages[this.currentLang][title]) {
                button.setAttribute('title', this.languages[this.currentLang][title]);
            }
        });
    },
    
    // Translate classification object (used by FitnessCalculator)
    translateClassification(classification) {
        const translations = this.languages[this.currentLang] || this.languages.en;
        return {
            ...classification,
            classification: translations[classification.classification] || classification.classification
        };
    }
};

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        I18NHealth.init();
    });
} else {
    I18NHealth.init();
}

// Make it globally available
window.I18NHealth = I18NHealth;