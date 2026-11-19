function startAnalysis() {
    // 第一部分：輸入姓名
    let name = prompt("第一題：請輸入你的姓名");

    if (name === null) {
        alert("你已取消操作！");
        return;
    }

    name = name.trim();

    if (name === "") {
        alert("姓名不可空白，請重新開始！");
        return;
    }

    // 第二部分：輸入年齡
    let ageInput = prompt("第二題：請輸入你的年齡");

    if (ageInput === null) {
        alert("你已取消操作！");
        return;
    }

    if (
        ageInput.trim() === "" ||
        !Number.isInteger(Number(ageInput)) ||
        Number(ageInput) < 0
    ) {
        alert("年齡必須是大於或等於 0 的整數！");
        return;
    }

    let age = Number(ageInput);

    // 第三部分：判斷年齡層
    let ageGroup = "";
    let ageAdvice = "";

    if (age < 13) {
        ageGroup = "兒童";
        ageAdvice = "保持好奇心，多閱讀、多學習，也要記得適度休息！";
    } else if (age < 20) {
        ageGroup = "青少年";
        ageAdvice = "勇敢探索自己的興趣，培養良好的學習習慣！";
    } else if (age < 40) {
        ageGroup = "青年";
        ageAdvice = "可以多嘗試不同的事物，累積經驗並設定目標！";
    } else if (age < 60) {
        ageGroup = "中年";
        ageAdvice = "持續學習新知識，也別忘記照顧自己的生活品質！";
    } else {
        ageGroup = "長者";
        ageAdvice = "保持活力、培養興趣，享受生活中的每一天！";
    }

    // 第四部分：選擇喜歡的科目
    let subject = prompt(
        "第三題：你最喜歡哪一個科目？\n" +
        "1. 數學\n" +
        "2. 英文\n" +
        "3. 電腦\n" +
        "4. 美術\n" +
        "5. 體育\n" +
        "請輸入 1 到 5"
    );

    if (subject === null) {
        alert("你已取消操作！");
        return;
    }

    let subjectName = "";
    let subjectMessage = "";

    if (subject.trim() === "1") {
        subjectName = "數學";
        subjectMessage = "你可能喜歡邏輯思考、計算與解決問題！";
    } else if (subject.trim() === "2") {
        subjectName = "英文";
        subjectMessage = "學習語言能幫助你認識不同文化與世界！";
    } else if (subject.trim() === "3") {
        subjectName = "電腦";
        subjectMessage = "你可以嘗試學習程式設計，創造自己的作品！";
    } else if (subject.trim() === "4") {
        subjectName = "美術";
        subjectMessage = "發揮你的創意，用不同方式表達自己的想法！";
    } else if (subject.trim() === "5") {
        subjectName = "體育";
        subjectMessage = "保持運動習慣，有助於培養體能與團隊精神！";
    } else {
        alert("科目選項錯誤，請重新開始！");
        return;
    }

    // 第五部分：選擇目前的心情
    let mood = prompt(
        "第四題：你現在的心情如何？\n" +
        "1. 開心\n" +
        "2. 普通\n" +
        "3. 有點累\n" +
        "4. 難過\n" +
        "請輸入 1 到 4"
    );

    if (mood === null) {
        alert("你已取消操作！");
        return;
    }

    let moodName = "";
    let moodMessage = "";

    if (mood.trim() === "1") {
        moodName = "開心";
        moodMessage = "太棒了！希望你繼續保持好心情，分享快樂！";
    } else if (mood.trim() === "2") {
        moodName = "普通";
        moodMessage = "平凡的一天也很珍貴，可以安排一件期待的小事！";
    } else if (mood.trim() === "3") {
        moodName = "有點累";
        moodMessage = "辛苦了！記得適度休息，讓自己恢復精神。";
    } else if (mood.trim() === "4") {
        moodName = "難過";
        moodMessage = "沒關係，可以給自己一點時間，也可以找信任的人聊聊。";
    } else {
        alert("心情選項錯誤，請重新開始！");
        return;
    }

    // 第六部分：計算年齡與 100 歲的差距
    let yearsLeft = 100 - age;
    let lifeMessage = "";

    if (age < 100) {
        lifeMessage = "距離 100 歲還有 " + yearsLeft + " 年。";
    } else {
        lifeMessage = "你已經達到或超過 100 歲，祝福你健康平安！";
    }

    // 第七部分：組合分析結果
    let resultHTML =
        '<div class="card border-info-subtle">' +
            '<div class="card-header bg-info-subtle text-info-emphasis">' +
                '<h2 class="h5 mb-0 fw-bold">🎉 你的個人分析結果</h2>' +
            '</div>' +
            '<div class="card-body">' +
                '<h3 class="h6 text-primary fw-bold">基本資料</h3>' +
                '<p><strong>姓名：</strong>' + escapeHTML(name) + '</p>' +
                '<p><strong>年齡：</strong>' + age + ' 歲</p>' +
                '<p><strong>年齡層：</strong>' + ageGroup + '</p>' +
                '<p><strong>生活建議：</strong>' + ageAdvice + '</p>' +
                '<hr>' +
                '<h3 class="h6 text-primary fw-bold">興趣分析</h3>' +
                '<p><strong>喜歡的科目：</strong>' + subjectName + '</p>' +
                '<p><strong>科目分析：</strong>' + subjectMessage + '</p>' +
                '<hr>' +
                '<h3 class="h6 text-primary fw-bold">心情分析</h3>' +
                '<p><strong>目前心情：</strong>' + moodName + '</p>' +
                '<p><strong>心情鼓勵：</strong>' + moodMessage + '</p>' +
                '<hr>' +
                '<h3 class="h6 text-primary fw-bold">生活小提醒</h3>' +
                '<p><strong>小小提醒：</strong>' + lifeMessage + '</p>' +
                '<p class="mb-0">謝謝你使用本互動系統，' +
                    escapeHTML(name) + '，祝你有美好的一天！</p>' +
            '</div>' +
        '</div>';

    // 第八部分：將結果顯示在網頁上
    const resultElement = document.getElementById("result");
    resultElement.className = "mb-0";
    resultElement.innerHTML = resultHTML;

    // 第九部分：顯示完成訊息
    alert("分析完成！請查看網頁中的分析結果。");
}

// 避免使用者輸入的姓名被當成 HTML 標籤
function escapeHTML(text) {
    return text.replace(/[&<>"']/g, function (char) {
        const entities = {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#39;"
        };

        return entities[char];
    });
}

// 成績分析器：使用 Array、Math 與多層 if...else 進行判斷。
function analyzeGrades() {
    const subjects = [
        { name: "數學", id: "mathScore" },
        { name: "英文", id: "englishScore" },
        { name: "電腦", id: "computerScore" },
        { name: "自然", id: "scienceScore" },
        { name: "國文", id: "chineseScore" }
    ];

    // 將多筆輸入成績存放在 Array 中。
    const scores = [];
    for (const subject of subjects) {
        const input = document.getElementById(subject.id);
        const value = input.value.trim();
        const score = Number(value);

        if (value === "" || !Number.isFinite(score) || score < 0 || score > 100) {
            showGradeError("請確認每一科都有輸入 0 到 100 之間的有效分數。");
            input.focus();
            return;
        }

        scores.push({ name: subject.name, score: score });
    }

    const scoreValues = scores.map(item => item.score);
    const highestScore = Math.max(...scoreValues);
    const lowestScore = Math.min(...scoreValues);
    const average = Math.round(
        scoreValues.reduce((total, score) => total + score, 0) / scoreValues.length
    );

    // 多層 if...else：依平均分數判斷整體表現。
    let level = "";
    let advice = "";
    let resultClass = "";

    if (average >= 90) {
        level = "優秀";
        advice = "表現非常出色！可以繼續保持，也能挑戰更深入的題目。";
        resultClass = "success";
    } else if (average >= 80) {
        level = "良好";
        advice = "整體表現不錯！找出較弱的科目，就能再往上提升。";
        resultClass = "primary";
    } else if (average >= 60) {
        level = "及格";
        if (lowestScore < 70) {
            advice = "已達及格標準，但有科目低於 70 分，建議優先複習較弱的部分。";
        } else {
            advice = "各科都有一定基礎，持續練習並維持穩定即可。";
        }
        resultClass = "warning";
    } else {
        level = "不及格";
        if (highestScore >= 60) {
            advice = "部分科目已有及格表現，建議先加強低分科目，再逐步補足觀念。";
        } else {
            advice = "目前各科都需要加強，可以從基礎觀念開始，分段練習。";
        }
        resultClass = "danger";
    }

    const topSubjects = scores
        .filter(item => item.score === highestScore)
        .map(item => escapeHTML(item.name))
        .join("、");

    const scoreRows = scores.map(item =>
        `<tr><td>${escapeHTML(item.name)}</td><td class="text-end">${item.score} 分</td></tr>`
    ).join("");

    const result = document.getElementById("gradeResult");
    result.className = `alert alert-${resultClass} mb-0`;
    result.innerHTML = `
        <h3 class="h5 fw-bold">📈 成績分析結果</h3>
        <div class="row g-3 my-2">
            <div class="col-6 col-md-3">
                <div class="grade-stat"><small>平均分數</small><strong>${average}</strong></div>
            </div>
            <div class="col-6 col-md-3">
                <div class="grade-stat"><small>最高分</small><strong>${highestScore}</strong></div>
            </div>
            <div class="col-6 col-md-3">
                <div class="grade-stat"><small>最低分</small><strong>${lowestScore}</strong></div>
            </div>
            <div class="col-6 col-md-3">
                <div class="grade-stat"><small>判斷結果</small><strong class="grade-level">${level}</strong></div>
            </div>
        </div>
        <p><strong>最高分科目：</strong>${topSubjects}</p>
        <p><strong>學習建議：</strong>${advice}</p>
        <h4 class="h6 fw-bold mt-3">各科成績</h4>
        <div class="table-responsive">
            <table class="table table-sm table-hover align-middle mb-0">
                <thead><tr><th>科目</th><th class="text-end">分數</th></tr></thead>
                <tbody>${scoreRows}</tbody>
            </table>
        </div>
    `;
}

function showGradeError(message) {
    const result = document.getElementById("gradeResult");
    result.className = "alert alert-danger mb-0";
    result.textContent = message;
}

function resetGrades() {
    const defaults = {
        mathScore: 85,
        englishScore: 92,
        computerScore: 78,
        scienceScore: 66,
        chineseScore: 88
    };

    for (const [id, value] of Object.entries(defaults)) {
        document.getElementById(id).value = value;
    }

    const result = document.getElementById("gradeResult");
    result.className = "alert alert-light border mb-0";
    result.innerHTML = '<h3 class="h5 fw-bold">成績分析結果</h3><p class="mb-0">已恢復預設成績，請按下「分析成績」。</p>';
}
