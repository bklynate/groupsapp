require 'googlecalendar'
g = GData.new
g.login(user_email, user_password)
event = { :title     => eventTitle,
          :content   => eventDesc,
          :author    => eventAdmin,
          :email     => user_email,
          :where     => eventLocation,
          :startTime => eventStartDate,
          :endTime   => eventEndDate}
g.new_event(event)
Quick Add