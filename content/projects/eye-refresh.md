---
title: Eye Refresh
emoji: 👁
date: 2022-01-28
summary: Android app that sends reminders for 20-20-20 rule for reducing eye strain
tags:
  - Java
  - Android SDK
---

### Background

20-20-20 rule is a solution to reducing eye strain when one looks at screens for long. Every twenty minutes, you look at someting twenty feet away for twenty seconds.

I made an Android app that sends reminders every twenty minutes. The reminders can be paused, snoozed, and acted upon. There is a timer for the twenty-second-refersh as well.

I made use of state diagram to get the design done. I am using a database (Room on top of SQLite) to store the state transitions). That is the source of truth for state. Actions can be taken from the Activity or the Notification buttons. There is a Broadcast receiver listening for notification actions. Alarm manager is used to schedule notifications which also uses this broadcast receiver.

I used Google's brand new Material You to get the UI styles.

I learned Android four or five years ago. I have forgotten a lot and a lot has changed since then. I got to brush up on my Android knowledge doing this.

### Screenshots

![Screenshot 1](/static/img/projects-screenshots/eye-refresh-1.png)
![Screenshot 2](/static/img/projects-screenshots/eye-refresh-2.png)
![Screenshot 3](/static/img/projects-screenshots/eye-refresh-3.png)
![Screenshot 4](/static/img/projects-screenshots/eye-refresh-3.png)

### Links

- [GitHub repository](https://github.com/sivakar12/EyeRefresh)

### Code Snippets

```
public enum State {
    PAUSED,
    REMINDER_SCHEDULED,
    REMINDER_SENT,
    REFRESH_HAPPENING
}

```

```
public class RefreshHappeningStateFragment extends Fragment {
    private CountDownTimer timer;
    private TextView label;
    private View buttonGroup;
    @Override
    public View onCreateView(LayoutInflater inflater, ViewGroup container,
                             Bundle savedInstanceState) {
        View view = inflater.inflate(R.layout.fragment_refresh_happening_state, container, false);
        label = view.findViewById(R.id.state_label);
        buttonGroup = view.findViewById(R.id.group_action_buttons);
        return view;
    }

    @Override
    public void onResume() {
        super.onResume();
        AsyncTask.execute(() -> {
            AppDatabase db = Room.databaseBuilder(getContext(), AppDatabase.class, "eye-refresh-db")
                    .enableMultiInstanceInvalidation()
                    .build();
            long startTimestamp = db.stateLogDao().getLastRefreshHappeningEntry().timestamp;
            long refreshDuration = EventHandlers.getRefreshDurationInMillis(getContext());
            long timeTillRefreshFinish = refreshDuration - (System.currentTimeMillis() - startTimestamp);
            getActivity().runOnUiThread(() -> {
                if (timeTillRefreshFinish < 0) {
                    buttonGroup.setVisibility(View.VISIBLE);
                } else {
                    this.timer = new CountDownTimer(timeTillRefreshFinish, 1000) {
                        @Override
                        public void onTick(long l) {
                            long secondsTillRefreshFinish = (refreshDuration -
                                    (System.currentTimeMillis() - startTimestamp)) / 1000;
                            label.setText("Look away for " + secondsTillRefreshFinish + " seconds");
                        }

                        @Override
                        public void onFinish() {
                            buttonGroup.setVisibility(View.VISIBLE);
                            label.setText("Refresh time up!");
                        }
                    };
                    this.timer.start();
                }
            });
        });
    }
    @Override
    public void onPause() {
        super.onPause();
        if (this.timer != null) {
            timer.cancel();
        }
    }
}
```


```

<FrameLayout xmlns:android="http://schemas.android.com/apk/res/android"
    android:layout_width="match_parent"
    android:layout_height="wrap_content"
    xmlns:app="http://schemas.android.com/apk/res-auto">
    <com.google.android.material.card.MaterialCardView
        android:layout_width="match_parent"
        android:layout_height="wrap_content"
        style="@style/Widget.Material3.CardView.Elevated"
        android:layout_margin="5dp"
        >
        <androidx.constraintlayout.widget.ConstraintLayout
            android:layout_width="match_parent"
            android:layout_height="wrap_content"
            android:layout_margin="5dp">
            <TextView
                android:id="@+id/state"
                android:layout_width="wrap_content"
                android:layout_height="wrap_content"
                app:layout_constraintStart_toStartOf="parent"
                app:layout_constraintTop_toTopOf="parent"
                style="@style/TextAppearance.Material3.TitleLarge"
                />
            <TextView
                android:id="@+id/time"
                android:layout_width="wrap_content"
                android:layout_height="wrap_content"
                app:layout_constraintStart_toStartOf="parent"
                app:layout_constraintTop_toBottomOf="@+id/state"
                style="@style/TextAppearance.Material3.BodyLarge"
                />
        </androidx.constraintlayout.widget.ConstraintLayout>
    </com.google.android.material.card.MaterialCardView>
</FrameLayout>

```
